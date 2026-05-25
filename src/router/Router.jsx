import { createBrowserRouter } from "react-router";
import Home from "../Componets/Home";
import Login from "../Componets/Login";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Home,
    },
    {
        path: "/login",
        Component: <Login></Login>
    }
])

export default router;