import { Link } from "react-router-dom";
import Books from "../layouts/Books";

export default function Home() {
    return (
        <>
            <Books limit={10} />
            <div className="flex justify-center">
                <Link to="/all">
                    <button className="btn mt-10">All Books</button>
                </Link>
            </div>
        </>
    );
}
