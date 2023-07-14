import { Link } from "react-router-dom";
import stockPhoto from "../assets/photo-1534528741775-53994a69daeb.jpg";

export default function NavBar() {
    return (
        <div className="navbar bg-base-100 px-52">
            <div className="navbar-start">
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    BookShelf
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal">
                    <li className="px-2">
                        <Link to="/">Books</Link>
                    </li>

                    <li className="px-2">
                        <Link to="/add">Add Book</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <div className="form-control">
                    <input
                        type="text"
                        placeholder="Search"
                        className="input input-bordered w-24 md:w-auto"
                    />
                </div>
                <div className="dropdown dropdown-end">
                    <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            <img src={stockPhoto} />
                        </div>
                    </label>
                    <ul
                        tabIndex={0}
                        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li>
                            <a>Settings</a>
                        </li>
                        <li>
                            <a>Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
