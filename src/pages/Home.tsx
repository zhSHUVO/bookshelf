import { Link } from "react-router-dom";
import Books from "../layouts/Books";

export default function Home() {
    return (
        <>
            <Books limit={10} />
            <div className="flex justify-center">
                <button className="btn mt-10">
                    <Link to="/all">All Books</Link>
                </button>
            </div>
        </>
    );
}
