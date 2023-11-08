import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../utility/AuthProvider";
// import axios from "axios";
// import { useQuery } from "@tanstack/react-query";
import HandleBids from "./HandleBids";


const BidRequests = () => {

    const { user } = useContext(AuthContext);

    const [bidDatas, setBidData] = useState([]);


    // const { data } = useQuery({
    //     queryKey: ['bids'],
    //     queryFn: async () => {
    //         const bids = await fetch(`http://localhost:5000/myPostedJobs?email=${user?.email}`)
    //         const data = bids.json();
    //         return data?.map(bids => bids?.bidUsers?.map(bid => bid))

    //     }
    // })

    // console.log(data);

    useEffect(() => {
        fetch(`http://localhost:5000/myPostedJobs?email=${user?.email}`)
            .then(res => res.json())
            .then(result => setBidData(result))
            .catch(err => console.log(err))
    }, [user?.email])

    const bidData = bidDatas?.map(bidUsers => bidUsers?.bidUsers)
    // const bids = bidDatas.map(bid => console.log(bid[0]));

    function convertToArrayList(arr) {
        const result = [];

        function flat(arr) {
            for (let i = 0; i < arr.length; i++) {
                if (Array.isArray(arr[i])) {
                    flat(arr[i]);
                } else {
                    result.push(arr[i]);
                }
            }
        }

        flat(arr);
        return result;
    }


    const bids = convertToArrayList(bidData)


    return (
        <div>
            <Helmet>
                <title>JH | Bid Requests</title>
            </Helmet>
            <div className="text-sm breadcrumbs pl-5">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/requests'>Bid Requests</Link></li>
                </ul>
            </div>
            <div className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-primary-blue">Bid Requests</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">See bids from people who sent you</p>
            </div>
            <div className="max-lg:overflow-x-auto">
                <div className="max-lg:overflow-x-scroll w-[900px] lg:w-[98%] mx-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-lg">
                                <th>SL No.</th>
                                <th>Job Title</th>
                                <th>Email</th>
                                <th>Deadline</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bids?.map((bid, key) => <HandleBids key={key} serial={key} data={bid}></HandleBids>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BidRequests;