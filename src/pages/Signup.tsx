import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../components/ui/Loading";
import { createUser } from "../redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";

interface SignupFormInputs {
    email: string;
    password: string;
    confirmpass: string;
}

export default function Signup() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<SignupFormInputs>();

    const { user, isLoading } = useAppSelector((state) => state.user);

    const onSubmit = (data: SignupFormInputs) => {
        dispatch(createUser({ email: data.email, password: data.password }));
    };

    const password = watch("password");

    useEffect(() => {
        if (user.email) {
            toast.success("User Account Created");
            navigate("/");
        }
    }, [user.email, navigate]);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="pt-20">
            <h2 className="text-2xl font-bold text-center my-3">Sign In</h2>
            <div className="flex justify-center items-center ">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col lg:w-1/4 w-3/4	shadow-2xl bg-base-100 rounded-xl p-5"
                >
                    <div className="indicator w-full">
                        <input
                            placeholder="Email"
                            className="my-1 input input-bordered w-full"
                            type="email"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email is Required",
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: "Provide a valid Email",
                                },
                            })}
                        />
                        {errors.email && (
                            <span className="indicator-item badge">
                                {errors.email.message}
                            </span>
                        )}
                    </div>

                    <div className="indicator w-full">
                        <input
                            placeholder="Password"
                            className="my-1 input input-bordered w-full"
                            type="password"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password is Required",
                                },
                                minLength: {
                                    value: 6,
                                    message: "Must be 6 characters or longer",
                                },
                            })}
                        />
                        {errors.password && (
                            <span className="indicator-item badge">
                                {errors.password.message}
                            </span>
                        )}
                    </div>

                    <div className="indicator w-full">
                        <input
                            placeholder="Confirn Password"
                            className="my-1 input input-bordered w-full"
                            type="password"
                            {...register("confirmpass", {
                                required: {
                                    value: true,
                                    message: "Confirm Password is Required",
                                },

                                validate: (value) =>
                                    value === password ||
                                    "Passwords do not match",
                            })}
                        />
                        {errors.confirmpass && (
                            <span className="indicator-item badge">
                                {errors.confirmpass.message}
                            </span>
                        )}
                    </div>

                    <input
                        value={"SignUp"}
                        className="my-1 btn "
                        type="submit"
                    />
                </form>
            </div>
            <p className="text-center pt-10 ">
                Already have an account?{" "}
                <Link to="/login" className="ml-3 btn">
                    Login
                </Link>
            </p>
        </div>
    );
}
