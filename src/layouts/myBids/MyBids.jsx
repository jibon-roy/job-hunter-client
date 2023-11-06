import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const MyBids = () => {
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
                            {/* row 1 */}
                            <tr className="hover  hover:text-primary-blue">
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Purple</td>
                                <td>Purple</td>
                                <td><button className="px-2 py-1 hover:bg-primary-blue-hover bg-primary-blue text-primary-white rounded-md">Complete</button></td>
                            </tr>
                            {/* row 2 */}
                            <tr className="hover  hover:text-primary-blue">
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Purple</td>
                                <td>Purple</td>
                                <td><button className="px-2 py-1 hover:bg-primary-blue-hover bg-primary-blue text-primary-white rounded-md">Complete</button></td>
                            </tr>
                            {/* row 3 */}
                            <tr className="hover  hover:text-primary-blue">
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td>Red</td>
                                <td>Red</td>
                                <td>Red</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyBids;