import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
    title: string;
    author: string;
    image: string;
    price: number;
    genre: string;
    publicationDate: string;
};

export default function Add() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
    };
    return (
        <div className="flex justify-center items-center ">
            <form
                onSubmit={(event) => void handleSubmit(onSubmit)(event)}
                className="flex flex-col lg:w-1/4 w-3/4	shadow-2xl bg-base-100 rounded-xl p-5"
            >
                <input
                    placeholder="Title"
                    className="my-1 input input-bordered w-full"
                    type="text"
                    {...register("title", { required: true })}
                />
                {errors.title && <span>Title is required</span>}

                <input
                    placeholder="Author"
                    className="my-1 input input-bordered w-full"
                    type="text"
                    {...register("author", { required: true })}
                />
                {errors.author && <span>Author is required</span>}

                <input
                    placeholder="Image Link"
                    className="my-1 input input-bordered w-full"
                    type="text"
                    {...register("image", { required: true })}
                />
                {errors.image && <span>Image is required</span>}

                <input
                    placeholder="Price"
                    className="my-1 input input-bordered w-full"
                    type="number"
                    {...register("price", { required: true })}
                />
                {errors.price && <span>Price is required</span>}

                <input
                    placeholder="Genre"
                    className="my-1 input input-bordered w-full"
                    type="text"
                    {...register("genre", { required: true })}
                />
                {errors.genre && <span>Genre is required</span>}

                <input
                    placeholder="Date"
                    className="my-1 input input-bordered w-full"
                    type="date"
                    {...register("publicationDate", { required: true })}
                />
                {errors.publicationDate && (
                    <span>Publication Date is required</span>
                )}

                <input
                    className="my-1 input input-bordered w-full cursor-pointer	"
                    type="submit"
                    value="Submit"
                />
            </form>
        </div>
    );
}
