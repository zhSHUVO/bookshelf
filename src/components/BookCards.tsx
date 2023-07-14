export default function BookCards() {
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl p-5">
                <img
                    className="w-48"
                    src="https://m.media-amazon.com/images/I/91lslnZ-btL._SL1500_.jpg"
                    alt="Book"
                />

                <div className="card-body p-5">
                    <h2 className="card-title">The Silent Patient</h2>
                    <small>
                        by
                        <span className="text-gray-600"> Alex Michaelides</span>
                    </small>
                    <p className="mt-5">
                        <span className="font-bold">Price : </span>$12
                    </p>
                    <p>
                        <span className="font-bold">Genre : </span>Mystery
                    </p>
                    <p>
                        <span className="font-bold">Published : </span>10th May
                    </p>
                    <div className="card-actions absolute bottom-5 right-5 ">
                        <button className="btn btn-xs text-blue-500">
                            Update
                        </button>
                        <button className="btn btn-xs text-red-500">
                            Delete
                        </button> 
                    </div>
                </div>
            </div>
        </div>
    );
}
