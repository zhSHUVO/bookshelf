import BookCards from "../components/BookCards";
import { useGetBooksQuery } from "../redux/features/book/booSlice";
import { IBook } from "../types/globalTypes";

export default function Books() {
    const { data, isLoading, isError, isSuccess } = useGetBooksQuery(undefined);

    console.log(isLoading);
    console.log(isError);
    console.log(isSuccess);

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
