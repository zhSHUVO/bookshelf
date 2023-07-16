import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useUpdateBookMutation } from "../redux/features/book/booSlice";
import { IBook } from "../types/globalTypes";

interface IProp {
    book: IBook;
}

export default function UpdateBook({ book }: IProp) {
    const navigate = useNavigate();

    const [updateBook] = useUpdateBookMutation();

    const { register, handleSubmit } = useForm<IBook>();

    const onSubmit = async (data: IBook) => {
        const filteredData = Object.fromEntries(
            Object.entries(data).filter(([, value]) => value !== "")
        );
        const updateInfo = {
            id: book?._id,
            data: filteredData,
        };

        try {
            await updateBook(updateInfo);
            navigate("/");
            toast.success("Successfully updated!");
        } catch (error) {
            toast.error("There is an error updating book info!");
        }
    };

    return (
        <div>
            <h2 className="text-2xl font-bold text-center my-3">Update Info</h2>
            <div className="flex justify-center items-center ">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col lg:w-1/4 w-3/4	shadow-2xl bg-base-100 rounded-xl p-5"
                >
                    <input
                        placeholder="Title"
                        className="my-1 input input-bordered w-full"
                        type="text"
                        defaultValue={book?.title}
                        {...register("title")}
                    />
                    <input
                        placeholder="Author"
                        className="my-1 input input-bordered w-full"
                        type="text"
                        defaultValue={book?.author}
                        {...register("author")}
                    />
                    <input
                        placeholder="Image Link"
                        className="my-1 input input-bordered w-full"
                        type="text"
                        defaultValue={book?.image}
                        {...register("image")}
                    />
                    <input
                        placeholder="Price"
                        className="my-1 input input-bordered w-full"
                        type="number"
                        defaultValue={book?.price}
                        {...register("price")}
                    />
                    <input
                        placeholder="Genre"
                        className="my-1 input input-bordered w-full"
                        type="text"
                        defaultValue={book?.genre}
                        {...register("genre")}
                    />
                    <input
                        placeholder="Date"
                        className="my-1 input input-bordered w-full"
                        type="date"
                        defaultValue={book?.publicationDate}
                        {...register("publicationDate")}
                    />
                    <input
                        className="my-1 btn w-full cursor-pointer	"
                        type="submit"
                        value="Submit"
                    />
                </form>
            </div>
        </div>
    );
}
