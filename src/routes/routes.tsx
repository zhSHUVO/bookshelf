import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Add from "../pages/Add";
import Edit from "../pages/Update";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Signup from "../pages/Signup";

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
                path: "/add",
                element: <Add />,
            },
            {
                path: "/update/:id",
                element: <Edit />,
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
