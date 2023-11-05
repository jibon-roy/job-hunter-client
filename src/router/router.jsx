import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorLayout from "../layouts/errorLayout/ErrorLayout";
import HomeLayout from "../layouts/homeLayout/HomeLayout";
import LoginLayout from "../layouts/LoginLayout/LoginLayout";
import RegisterLayout from "../layouts/RegisterLayout/RegisterLayout";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        errorElement: <ErrorLayout></ErrorLayout>,
        children: [
            {
                path: '/',
                element: <HomeLayout></HomeLayout>,
            },
            {
                path: '/login',
                element: <LoginLayout></LoginLayout>,
            },
            {
                path: '/register',
                element: <RegisterLayout></RegisterLayout>,
            },
            {
                path: '/',
                element: <HomeLayout></HomeLayout>,
            },
        ]
    }
])

export default router;