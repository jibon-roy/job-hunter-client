import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
// import { useContext } from "react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../utility/AuthProvider";
import axios from "axios";
import PostEdit from "./PostEdit";
// import { useQuery } from "@tanstack/react-query";


const MyPostedJobs = () => {

    const { user } = useContext(AuthContext);

    const [postedData, setPostedData] = useState({})

    // const { isLoading, data: postedData } = useQuery({
    //     queryKey: ['postedData'],
    //     queryFn: () => {
    //         const data = axios.get(`/posted?email=${user?.email}`)
    //         return data.data
    //     }
    // })

    useEffect(() => {
        axios.get(`/posted?email=${user?.email}`)
            .then(res => setPostedData(res.data))
            .catch(err => console.log(err))
    }, [user?.email])

    const postedJobs = postedData?.addedJobsId?.map(data => {
        for (let i = 0; i < data.length; i++) {
            return data[i]
        }
    })

    // if (isLoading) {
    //     return <div className="w-full h-[90vh] flex justify-center items-center"><span className="loading flex loading-dots loading-lg"></span></div>
    // }

    return (
        <div>
            <Helmet>
                <title>JH | My Posted Jobs</title>
            </Helmet>
            <div className="text-sm breadcrumbs pl-5">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/posted'>My Posted Jobs</Link></li>
                </ul>
            </div>
            <div className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-primary-blue">My Posted Job</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Update and delete your posted job.</p>
            </div>
            {/* Update and delete my posted jobs */}
            <div>
                {
                    postedJobs?.map((job, index) => <PostEdit key={job} index={index} job={job}></PostEdit>)
                }
            </div>
        </div>
    );
};

export default MyPostedJobs;