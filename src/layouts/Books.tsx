import { useSelector } from "react-redux";
import BookCards from "../components/BookCards";
import { useGetBooksQuery } from "../redux/features/book/booSlice";
import { RootState } from "../redux/store";
import { IBook } from "../types/globalTypes";

interface IProps {
    limit?: number;
}

export default function Books({ limit = Infinity }: IProps) {
    const { search } = useSelector((state: RootState) => state.filter);
    const { data: books } = useGetBooksQuery(undefined);

    const filteredBooks = search
        ? books?.data?.filter((book: IBook) =>
              book.title.toLowerCase().includes(search.toLowerCase())
          )
        : books?.data;

    return (
        <>
            <div className="grid grid-cols-5 gap-12 px-52 justify-items-center mt-10">
                {filteredBooks?.slice(0, limit)?.map((book: IBook) => (
                    <BookCards key={book._id} book={book} />
                ))}
            </div>
        </>
    );
}
