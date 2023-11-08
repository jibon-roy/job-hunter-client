import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../utility/AuthProvider";
import axios from "axios";
import BidTable from "./BidTable";
// import { useQuery } from "@tanstack/react-query";

const MyBids = () => {
    const { user } = useContext(AuthContext);

    const [bidData, setBidData] = useState([])

    useEffect(() => {
        axios.get(`/posted?email=${user?.email}`)
            .then(res => setBidData(res.data?.bidJobsData))
            .catch(err => console.log(err))
    }, [user?.email])

    // bidData.map(job => console.log(job))
    // console.log(bidData);

    // const { data } = useQuery({
    //     queryKey: ['job'],
    //     queryFn: () => {
    //         const job = axios.get(`/posted?email=${user?.email}`)
    //             .then(res => setBidData(res.data?.bidJobsData))
    //             .catch(err => console.log(err));
    //         return data;
    //     }
    // })

    // console.log(data);


    return (
        <div>
            <Helmet>
                <title>JH | My Bids</title>
            </Helmet>
            <div className="text-sm breadcrumbs pl-5">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/bids'>My Bids</Link></li>
                </ul>
            </div>
            <div className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-primary-blue">My Bids</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Your bid lists and status.</p>
            </div>
            <div className="max-lg:overflow-x-auto">
                <div className="max-lg:overflow-x-scroll w-[900px] lg:w-[98%] mx-auto">
                    <table className="table mb-24">
                        {/* head */}
                        <thead>
                            <tr className="text-lg">
                                <th>SL No.</th>
                                <th>Job Title</th>
                                <th>Email</th>
                                <th>Bid Price</th>
                                <th>Deadline</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bidData.length > 0 || !bidData ?
                                    bidData?.map((data, key) => <BidTable key={key} value={key} data={data}></BidTable>)
                                    : <tr><td>No bid data</td></tr>
                            }</tbody>

                        {/* <tr className="hover  hover:text-primary-blue">
                                <th>1</th>
                                <td>{bidData[0]?.title}</td>
                                <td>{bidData[0]?.employee}</td>
                                <td>$ {bidData[0]?.amount}</td>
                                <td>{bidData[0]?.deadline}</td>
                                <td>{bidData[0]?.status ? <p className="text-green font-medium">Complete</p> : <p className="text-red font-medium">Pending</p>}</td>
                                <td><button className="px-2 py-1 hover:bg-primary-blue-hover bg-primary-blue text-primary-white rounded-md">Complete</button></td>
                            </tr> */}
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyBids;