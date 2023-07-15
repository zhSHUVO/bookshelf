import { useParams } from "react-router-dom";
import UpdateBook from "../components/UpdateBook";
import { useGetSingleBookQuery } from "../redux/features/book/booSlice";

export default function Update() {
    const { id } = useParams();
    const {
        data: book,
        isLoading,
        isError,
        isSuccess,
    } = useGetSingleBookQuery(id);

    console.log(isLoading);
    console.log(isError);
    console.log(isSuccess);

    return (
        <div>
            <UpdateBook book={book?.data} />
        </div>
    );
}
