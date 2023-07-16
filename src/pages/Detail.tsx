import { Link, useNavigate, useParams } from "react-router-dom";
import ReviewForm from "../components/ReviewForm";
import Reviews from "../components/Reviews";
import {
    useDeleteBookMutation,
    useGetSingleBookQuery,
} from "../redux/features/book/booSlice";

export default function Detail() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { data } = useGetSingleBookQuery(id);
    const book = data?.data;

    const [deleteBook] = useDeleteBookMutation();

    const handleDelete = () => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this book?"
        );
        if (confirmDelete) {
            deleteBook(data?.data?._id);
        }
        navigate("/");
    };
    return (
        <div className="flex justify-center">
            <div className=" flex flex-col">
                <div className="card card-side shadow-2xl bg-base-100 p-5 h-full w-[31rem]">
                    <img className="w-52" src={book?.image} alt="Book" />

                    <div className="card-body p-5">
                        <h2 className="card-title">{book?.title}</h2>
                        <small>
                            by
                            <span className="text-gray-600">
                                {book?.author}
                            </span>
                        </small>
                        <p className="mt-5">
                            <span className="font-bold">Price : </span>$
                            {book?.price}
                        </p>
                        <p>
                            <span className="font-bold">Genre : </span>
                            {book?.genre}
                        </p>
                        <p>
                            <span className="font-bold">Published : </span>
                            {book?.publicationDate}
                        </p>
                        <div className="card-actions absolute bottom-5 right-5 ">
                            <Link to={`/update/${book?.id}`}>
                                {" "}
                                <button className="btn btn-sm text-blue-500">
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 1024 1024"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9z"></path>
                                    </svg>
                                    update
                                </button>
                            </Link>
                            <button
                                onClick={() => handleDelete()}
                                className="btn btn-sm text-red-500"
                            >
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 1024 1024"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z"></path>
                                </svg>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
                <ReviewForm />
            </div>
            <div className="ml-5">
                <Reviews book={book} />
            </div>
        </div>
    );
}
