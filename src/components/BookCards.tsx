import { Link } from "react-router-dom";
import { IBook } from "../types/globalTypes";

interface IProp {
    book: IBook;
}

export default function BookCards({ book }: IProp) {
    return (
        <Link to={`/details/${book._id}`}>
            <div className="card card-compact w-60 bg-base-100 shadow-xl h-full">
                <figure>
                    <img className="w-40" src={book.image} alt="Book" />
                </figure>
                <div className="card-body justify-end">
                    <h2 className="card-title">{book.title}</h2>
                    <p>
                        by
                        <span className="text-gray-600"> {book.author}</span>
                    </p>
                    <p>
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
                </div>
            </div>
        </Link>
    );
}
