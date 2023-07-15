import { useSelector } from "react-redux";
import BookCards from "../components/BookCards";
import { useGetBooksQuery } from "../redux/features/book/booSlice";
import { RootState } from "../redux/store";
import { IBook } from "../types/globalTypes";

interface IProps {
    limit?: number;
}

export default function Books({ limit = Infinity }: IProps) {
    let { data: books } = useGetBooksQuery(undefined);
    const { search } = useSelector((state: RootState) => state.filter);

    if (search) {
        if (books?.data?.length > 0) {
            books = books?.data?.filter((book: IBook) =>
                book.title.toLowerCase().includes(search.toLowerCase())
            );
        }
    } else {
        books = books?.data;
    }

    return (
        <>
            <div className="grid grid-cols-3 gap-12 px-52">
                {books &&
                    books
                        ?.slice(0, limit)
                        .map((book: IBook) => (
                            <BookCards key={book._id} book={book} />
                        ))}
            </div>
        </>
    );
}
