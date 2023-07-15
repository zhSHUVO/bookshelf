import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAddBookMutation } from "../redux/features/book/booSlice";
import { IBook } from "../types/globalTypes";

export default function AddForm() {
    const navigate = useNavigate();
    const [addBook] = useAddBookMutation();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IBook>();

    const onSubmit: SubmitHandler<IBook> = (data) => {
        addBook(data);
        navigate("/");
        toast.success("Book added successfully");
    };
    return (
        <div className="flex justify-center items-center ">
            <form
                onSubmit={(event) => void handleSubmit(onSubmit)(event)}
                className="flex flex-col lg:w-1/4 w-3/4	shadow-2xl bg-base-100 rounded-xl p-5"
            >
                <div className="indicator w-full">
                    <input
                        placeholder="Title"
                        className="my-1 input input-bordered w-full"
                        type="text"
                        {...register("title", { required: true })}
                    />
                    {errors.title && (
                        <span className="indicator-item badge">required</span>
                    )}{" "}
                </div>

                <div className="indicator w-full">
                    <input
                        placeholder="Author"
                        className="my-1 input input-bordered w-full"
                        type="text"
                        {...register("author", { required: true })}
                    />
                    {errors.author && (
                        <span className="indicator-item badge">required</span>
                    )}
                </div>

                <div className="indicator w-full">
                    <input
                        placeholder="Image Link"
                        className="my-1 input input-bordered w-full"
                        type="text"
                        {...register("image", { required: true })}
                    />
                    {errors.image && (
                        <span className="indicator-item badge">required</span>
                    )}
                </div>

                <div className="indicator w-full">
                    <input
                        placeholder="Price"
                        className="my-1 input input-bordered w-full"
                        type="number"
                        {...register("price", { required: true })}
                    />
                    {errors.price && (
                        <span className="indicator-item badge">required</span>
                    )}
                </div>

                <div className="indicator w-full">
                    <input
                        placeholder="Genre"
                        className="my-1 input input-bordered w-full"
                        type="text"
                        {...register("genre", { required: true })}
                    />
                    {errors.genre && (
                        <span className="indicator-item badge">required</span>
                    )}
                </div>

                <div className="indicator w-full">
                    <input
                        placeholder="Date"
                        className="my-1 input input-bordered w-full"
                        type="date"
                        {...register("publicationDate", { required: true })}
                    />
                    {errors.publicationDate && (
                        <span className="indicator-item badge">required</span>
                    )}
                </div>

                <input
                    className="my-1 btn input input-bordered w-full cursor-pointer	"
                    type="submit"
                    value="Submit"
                />
            </form>
        </div>
    );
}
