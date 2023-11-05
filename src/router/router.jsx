import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorLayout from "../layouts/errorLayout/ErrorLayout";
import HomeLayout from "../layouts/homeLayout/HomeLayout";
import LoginLayout from "../layouts/LoginLayout/LoginLayout";
import RegisterLayout from "../layouts/RegisterLayout/RegisterLayout";
import AllJobs from "../layouts/AllJobs/AllJobs";


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
                path: '/all-jobs',
                element: <AllJobs></AllJobs>,
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