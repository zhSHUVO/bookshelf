import { Link } from "react-router-dom";
import { IBook } from "../types/globalTypes";

interface IProp {
    book: IBook;
}

export default function BookCards({ book }: IProp) {
    console.log(book);
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl p-5 h-full">
                <img className="w-48" src={book.image} alt="Book" />

                <div className="card-body p-5">
                    <h2 className="card-title">{book.title}</h2>
                    <small>
                        by
                        <span className="text-gray-600"> {book.author}</span>
                    </small>
                    <p className="mt-5">
                        <span className="font-bold">Price : </span>${book.price}
                    </p>
                    <p>
                        <span className="font-bold">Genre : </span>
                        {book.genre}
                    </p>
                    <p>
                        <span className="font-bold">Published : </span>
                        {book.publicationDate}
                    </p>
                    <div className="card-actions absolute bottom-5 right-5 ">
                        <button className="btn btn-xs text-blue-500">
                            <Link to="/update/:id">Update</Link>
                        </button>
                        <button className="btn btn-xs text-red-500">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
