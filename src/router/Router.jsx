import { createBrowserRouter } from "react-router";
import Home from "../Componets/Home";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Home,
    }
])

export default router;