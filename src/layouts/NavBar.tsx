import { signOut } from "firebase/auth";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import stockPhoto from "../assets/defaultBg.jpg";
import { auth } from "../lib/firebase";
import { searchQuery } from "../redux/features/filter/filterSlice";
import { setUser } from "../redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";

export default function NavBar() {
    const dispatch = useAppDispatch();
    const { user } = useAppSelector((state) => state.user);

    const handleLogout = () => {
        signOut(auth).then(() => {
            dispatch(setUser(null));
            toast.success("User Logged Out");
        });
    };

    return (
        <div className="navbar bg-base-100 lg:px-52">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li className="px-2">
                            <Link to="/">Books</Link>
                        </li>

                        <li className="px-2">
                            <Link to="/add">Add Book</Link>
                        </li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    BookShelf
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
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
                        onChange={(e) => dispatch(searchQuery(e.target.value))}
                        className="input input-bordered w-24 md:w-auto"
                    />
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn  avatar">
                        <div className="w-10 rounded-xl">
                            <img src={stockPhoto} />
                        </div>
                    </label>
                    <ul
                        tabIndex={0}
                        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <a>{user?.email ? user?.email : "no user"}</a>
                        </li>
                        <li>
                            {user?.email ? (
                                <a onClick={handleLogout}>LogOut</a>
                            ) : (
                                <Link to="/login">Login</Link>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
