import BookCards from "../components/BookCards";

export default function Books() {
    return (
        <div className="grid grid-cols-3 gap-12 px-52 py-10	">
            <BookCards />
            <BookCards />
            <BookCards />
            <BookCards />
        </div>
    );
}
