import BookCards from "../components/BookCards";
import { useGetBooksQuery } from "../redux/features/book/booSlice";
import { IBook } from "../types/globalTypes";

export default function AllBook() {
    const { data } = useGetBooksQuery(undefined);
    return (
        <div className="grid grid-cols-3 gap-12 px-52 py-10">
            {data?.data &&
                data?.data.map((book: IBook) => (
                    <BookCards key={book._id} book={book} />
                ))}
        </div>
    );
}
