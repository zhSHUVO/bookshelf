import { Review } from "../types/globalTypes";

interface IProps {
    book: {
        reviews?: Review[];
    };
}

export default function Reviews({ book }: IProps) {
    console.log(book);
    return (
        <div>
            <div className="w-[35rem]">
                <table className="table table-fixed">
                    <thead>
                        <tr>
                            <th >Email</th>
                            <th>Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {book?.reviews?.map((review: Review, index: number) => (
                            <tr key={index}>
                                <td>{review.email}</td>
                                <td>{review.review}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
