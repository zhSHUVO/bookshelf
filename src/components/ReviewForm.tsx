import { SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { usePostReviewMutation } from "../redux/features/book/booSlice";
import { useAppSelector } from "../redux/hook";
import { IBook } from "../types/globalTypes";

export default function ReviewForm() {
    const { id } = useParams();
    const { user } = useAppSelector((state) => state.user);

    const { register, handleSubmit, reset } = useForm<IBook>();

    const [postReview] = usePostReviewMutation();

    const onSubmit: SubmitHandler<IBook> = (data) => {
        const reviewObj = {
            email: user?.email,
            ...data,
        };
        const reviewData = {
            id,
            data: { review: reviewObj },
        };
        postReview(reviewData);

        reset();
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
                    {...register("review")}
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
