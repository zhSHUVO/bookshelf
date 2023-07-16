import { useState } from "react";
import { useSelector } from "react-redux";
import BookCards from "../components/BookCards";
import { useGetBooksQuery } from "../redux/features/book/booSlice";
import {
    selectFilterGenre,
    selectFilterYear,
} from "../redux/features/filter/filterSlice";
import { useAppDispatch } from "../redux/hook";
import { RootState } from "../redux/store";
import { IBook } from "../types/globalTypes";

interface IProps {
    limit?: number;
}

export default function Books({ limit = Infinity }: IProps) {
    const dispatch = useAppDispatch();
    const { data } = useGetBooksQuery(undefined);
    const books = data?.data;
    const { search, filterGenre, filterYear } = useSelector(
        (state: RootState) => state.filter
    );

    const [selectedGenreOption, setSelectedGenreOption] = useState("");
    const [selectedYearOption, setSelectedYearOption] = useState("");

    const handleGenreSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedGenre = event.target.value;
        setSelectedGenreOption(selectedGenre);
        dispatch(selectFilterGenre(selectedGenre));
    };

    const handleYearSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedYear = event.target.value;
        setSelectedYearOption(selectedYear);
        dispatch(selectFilterYear(selectedYear));
    };

    const publicationYears = [
        ...(new Set(
            books?.map((book: IBook) => book.publicationDate?.split("-")[0])
        ) as Set<string>),
    ];
    const genres = [
        ...(new Set(books?.map((book: IBook) => book.genre)) as Set<string>),
    ];

    const filteredBooks = books?.filter((book: IBook) => {
        const matchesSearch = book.title
            .toLowerCase()
            .includes(search.toLowerCase());
        const matchesGenre =
            filterGenre === "All" ||
            book.genre.toLowerCase() === filterGenre.toLowerCase();
        const matchesYear =
            filterYear === "All" || book.publicationDate.includes(filterYear);
        return matchesSearch && matchesGenre && matchesYear;
    });

    return (
        <>
            <div className="flex flex-row justify-end space-x-3 px-52">
                <select
                    value={selectedYearOption}
                    onChange={handleYearSelect}
                    className="select select-bordered select-sm max-w-xs my-5"
                >
                    <option value="All">All</option>
                    {publicationYears?.map((year, index) => (
                        <option key={index}>{year}</option>
                    ))}
                </select>
                <select
                    value={selectedGenreOption}
                    onChange={handleGenreSelect}
                    className="select select-bordered select-sm max-w-xs my-5"
                >
                    <option value="All">All</option>
                    {genres?.map((genre, index) => (
                        <option key={index}>{genre}</option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-5 gap-12 px-52 justify-items-center">
                {filteredBooks?.slice(0, limit)?.map((book: IBook) => (
                    <BookCards key={book._id} book={book} />
                ))}
            </div>
        </>
    );
}
