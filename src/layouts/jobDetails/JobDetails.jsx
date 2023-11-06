import { Link } from "react-router-dom";
import JobBidInput from "./JobBidInput";
import { Helmet } from "react-helmet-async";

const JobDetails = () => {
    return (
        <div className="px-5">
            <Helmet>
                <title>JH | Job Details</title>
            </Helmet>
            <div className="text-sm breadcrumbs">
                <ul>
                    <li><a>Home</a></li>
                    <li><Link to='/jobs'>Jobs</Link></li>
                    <li>Job Details</li>
                </ul>
            </div>
            <div className="mt-10 grid md:grid-cols-4 gap-5 justify-between">
                <div className="col-span-3">
                    <div>
                        <div className="font-medium text-primary-blue text-3xl mb-5">
                            Job-Details:
                        </div>
                        <div className="card-title">
                            Job Name:
                        </div>
                        <div className="card-title">
                            Deadline:
                        </div>
                        <div className="card-title">
                            Price range:
                        </div>
                        <div className="card-title">
                            Job Category:
                        </div>
                        <div className="card-title">
                            Job Owner:
                        </div>
                        <div className="card-title">
                            Job Description:
                        </div>
                        <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit veniam quaerat possimus soluta nulla distinctio perspiciatis quia eum maxime autem eos, omnis, libero dignissimos rerum doloribus? Modi, aliquid. Cumque quas in ex dolorem consectetur explicabo voluptatem consequatur tempora illum corrupti, aliquid, adipisci laboriosam nostrum iusto praesentium tenetur, odit assumenda sint.</p>
                    </div>
                    <div>
                        <JobBidInput></JobBidInput>
                    </div>
                </div>
                <div>
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr className="border"><th className="bg-primary-blue text-lg text-neutral-50 font-semibold py-2 px-4">Today&#39;s hot Jobs &#187;</th></tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b border-l border-r dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-4 py-2">
                                        Lorem ipsum dolor sit amet.
                                    </td>
                                </tr>
                                <tr className="bg-white border-b border-l border-r dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-4 py-2">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </td>
                                </tr>
                                <tr className="bg-white border-b border-l border-r dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-4 py-2">
                                        Lorem ipsum dolor sit amet consectetur.
                                    </td>
                                </tr>
                                <tr className="bg-white border-b border-l border-r dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-4 py-2">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, quae.
                                    </td>
                                </tr>
                                <tr className="bg-white border-b border-l border-r dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-4 py-2">
                                        Lorem ipsum dolor sit amet.
                                    </td>
                                </tr>
                                <tr className="bg-white border-b border-l border-r dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-4 py-2">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </td>
                                </tr>
                                <tr className="bg-white border-b border-l border-r dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-4 py-2">
                                        Lorem ipsum dolor sit amet consectetur.
                                    </td>
                                </tr>
                                <tr className="bg-white border-b border-l border-r dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-4 py-2">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, quae.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default JobDetails;