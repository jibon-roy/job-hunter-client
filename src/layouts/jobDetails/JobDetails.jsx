import { Link, useLoaderData } from "react-router-dom";
import JobBidInput from "./JobBidInput";
import { Helmet } from "react-helmet-async";


const JobDetails = () => {

    const jobData = useLoaderData();

    const job = jobData[0];

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
                        <div className="font-medium text-primary-indigo text-3xl mb-5">
                            Job-Details:
                        </div>
                        <table className="font-medium">
                            <tbody>
                                <tr>
                                    <td> Job Name:</td>
                                    <td className="px-4 py-1"> <span className="font-bold text-primary-indigo">{job?.jobTitle}</span></td>
                                </tr>
                                <tr>
                                    <td>Deadline:</td>
                                    <td className="px-4 py-1">{job?.deadline}</td>
                                </tr>
                                <tr>
                                    <td> Price range: </td>
                                    <td className="px-4 py-1">{'$' + job?.minPrice + " - " + '$' + job?.maxPrice}</td>
                                </tr>
                                <tr>
                                    <td> Job Category:</td>
                                    <td className="px-4 py-1"> {job?.category}</td>
                                </tr>
                                <tr>
                                    <td> Employee Contact:</td>
                                    <td className="px-4 py-1"> {job?.employeeEmail}</td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="my-5">
                            <div className=" text-xl font-bold">Job Description:</div>
                            <p className="text-justify">{job?.jobDescription}</p>
                        </div>

                    </div>
                    <div>
                        <JobBidInput title={job?.jobTitle} employee={job?.employeeEmail} jobId={job?._id}></JobBidInput>
                    </div>
                </div>
                <div>
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr className="border"><th className="bg-primary-indigo text-lg text-neutral-50 font-semibold py-2 px-4">Today&#39;s hot Jobs &#187;</th></tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b border-l border-r dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-4 py-2">
                                        {job?.jobTitle}
                                    </td>
                                </tr>
                                <tr className="bg-white border-b border-l border-r dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-4 py-2">
                                        {job?.jobTitle}
                                    </td>
                                </tr>
                                <tr className="bg-white border-b border-l border-r dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-4 py-2">
                                        {job?.jobTitle}
                                    </td>
                                </tr>
                                <tr className="bg-white border-b border-l border-r dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-4 py-2">
                                        {job?.jobTitle}
                                    </td>
                                </tr>
                                <tr className="bg-white border-b border-l border-r dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-4 py-2">
                                        {job?.jobTitle}
                                    </td>
                                </tr>
                                <tr className="bg-white border-b border-l border-r dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-4 py-2">
                                        {job?.jobTitle}
                                    </td>
                                </tr>
                                <tr className="bg-white border-b border-l border-r dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-4 py-2">
                                        {job?.jobTitle}
                                    </td>
                                </tr>
                                <tr className="bg-white border-b border-l border-r dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-4 py-2">
                                        {job?.jobTitle}
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