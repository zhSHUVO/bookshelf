import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAddBookMutation } from "../redux/features/book/booSlice";
import { IBook } from "../types/globalTypes";

export default function ReviewForm() {
    const navigate = useNavigate();
    const [addBook] = useAddBookMutation();
    const { register, handleSubmit } = useForm<IBook>();

    const onSubmit: SubmitHandler<IBook> = (data) => {
        toast.success("Review added successfully");
    };
    return (
        <div className="w-[31rem]">
            <form
                onSubmit={(event) => void handleSubmit(onSubmit)(event)}
                className="flex flex-col shadow-2xl bg-base-100 rounded-xl p-5"
            >
                <input
                    placeholder="Review"
                    className="my-1 input input-bordered"
                    type="text"
                    {...register("reviews")}
                />

                <input
                    className="my-1 btn cursor-pointer"
                    type="submit"
                    value="Submit"
                />
            </form>
        </div>
    );
}
