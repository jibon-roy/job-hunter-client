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
import PrivetLayout from "../layouts/privetLayout/PrivetLayout";
import PublicLayout from "../layouts/publicLayout/PublicLayout";


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
                element: <PrivetLayout><JobDetails></JobDetails></PrivetLayout>,
            },
            {
                path: '/add',
                element: <PrivetLayout><AddJob></AddJob></PrivetLayout>,
            },
            {
                path: '/posted',
                element: <PrivetLayout><MyPostedJobs></MyPostedJobs></PrivetLayout>,
            },
            {
                path: '/bids',
                element: <PrivetLayout><MyBids></MyBids></PrivetLayout>,
            },
            {
                path: '/requests',
                element: <PrivetLayout><BidRequests></BidRequests></PrivetLayout>,
            },
            {
                path: '/login',
                element: <PublicLayout><LoginLayout></LoginLayout></PublicLayout>,
            },
            {
                path: '/register',
                element: <PublicLayout><RegisterLayout></RegisterLayout></PublicLayout>,
            },

        ]
    }
])

export default router;