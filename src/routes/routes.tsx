import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Add from "../pages/Add";
import AllBook from "../pages/AllBook";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Signup from "../pages/Signup";
import Update from "../pages/Update";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/all",
                element: <AllBook />,
            },
            {
                path: "/add",
                element: (
                    <PrivateRoute>
                        <Add />
                    </PrivateRoute>
                ),
            },
            {
                path: "/update/:id",
                element: (
                    <PrivateRoute>
                        <Update />
                    </PrivateRoute>
                ),
            },
            {
                path: "/details/:id",
                element: (
                    <PrivateRoute>
                        <Detail />
                    </PrivateRoute>
                ),
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default routes;
