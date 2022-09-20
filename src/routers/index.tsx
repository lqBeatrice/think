import { Navigate, useRoutes } from "react-router-dom";
import Login from "@/views/login/index";

interface RouteObject {
    path: string;
    children?: RouteObject[];
    element?: React.ReactNode;
    meta?: object;
}

const routes: RouteObject[] = [
    {
        path: "/",
		element: <Navigate to="/login" />
    },
    {
        path: "/login",
        element: <Login />,
		meta: {
            requiresAuth: false,
            title: "登录页",
            key: "login"
        }
    }
]

const Router = () => {
    return useRoutes(routes)
}

export default Router