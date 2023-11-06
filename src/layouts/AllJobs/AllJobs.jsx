import { Link } from "react-router-dom";
import TabLayout from "../homeLayout/TabLayout";
import { Helmet } from "react-helmet-async";


const AllJobs = () => {
    return (
        <div>
            <Helmet>
                <title>JH | All Jobs</title>
            </Helmet>
            <div className="text-sm breadcrumbs pl-5">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/jobs'>Jobs</Link></li>
                </ul>
            </div>
            <TabLayout></TabLayout>
        </div>
    );
};

export default AllJobs;