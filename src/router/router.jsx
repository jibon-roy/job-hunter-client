import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorLayout from "../layouts/errorLayout/ErrorLayout";
import HomeLayout from "../layouts/homeLayout/HomeLayout";
import LoginLayout from "../layouts/LoginLayout/LoginLayout";
import RegisterLayout from "../layouts/RegisterLayout/RegisterLayout";
import AllJobs from "../layouts/AllJobs/AllJobs";
import JobDetails from "../layouts/jobDetails/jobDetails";
import AddJob from "../layouts/addJob/AddJob";
import MyPostedJobs from "../layouts/myPostedJobs/MyPostedJobs";
import MyBids from "../layouts/myBids/MyBids";
import BidRequests from "../layouts/BidRequests/BidRequests";


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
                path: '/jobs',
                element: <AllJobs></AllJobs>,
            },
            {
                path: '/jobs/id',
                element: <JobDetails></JobDetails>,
            },
            {
                path: '/add',
                element: <AddJob></AddJob>,
            },
            {
                path: '/posted',
                element: <MyPostedJobs></MyPostedJobs>,
            },
            {
                path: '/bids',
                element: <MyBids></MyBids>,
            },
            {
                path: '/requests',
                element: <BidRequests></BidRequests>,
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