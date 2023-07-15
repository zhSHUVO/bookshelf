import BookCards from "../components/BookCards";
import { useGetBooksQuery } from "../redux/features/book/booSlice";
import { IBook } from "../types/globalTypes";

export default function Books() {
    const { data, isLoading } = useGetBooksQuery(undefined);
    console.log(data?.data);
    return (
        <div className="grid grid-cols-3 gap-12 px-52 py-10">
            {!isLoading &&
                data?.data &&
                data?.data
                    ?.slice(0, 10)
                    .map((book: IBook) => (
                        <BookCards key={book._id} book={book} />
                    ))}
        </div>
    );
}
