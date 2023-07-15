import { useParams } from "react-router-dom";
import UpdateBook from "../components/UpdateBook";
import { useGetSingleBookQuery } from "../redux/features/book/booSlice";

export default function Update() {
    const { id } = useParams();
    const { data: book } = useGetSingleBookQuery(id);

    return (
        <div>
            <UpdateBook book={book?.data} />
        </div>
    );
}
