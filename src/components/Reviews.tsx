import { Review } from "../types/globalTypes";

interface IProps {
    book: {
        reviews?: Review[];
    };
}

export default function Reviews({ book }: IProps) {
    return (
        <div>
            <div className="lg:w-[35rem] mt-5">
                <table className="table table-auto">
                    <thead>
                        <tr>
                            <th>Email</th>
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
