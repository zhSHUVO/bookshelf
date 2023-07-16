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
        <div className="navbar bg-base-100 px-52 ">
            <div className="navbar-start">
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    BookShelf
                </Link>

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
                        onChange={(e) => dispatch(searchQuery(e.target.value))}
                        className="input input-bordered w-24 md:w-auto"
                    />
                </div>
                <div className="dropdown dropdown-end">
                    <label
                        tabIndex={0}
                        className="btn  avatar"
                    >
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
