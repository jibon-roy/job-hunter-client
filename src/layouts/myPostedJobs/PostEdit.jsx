import PrimaryButton from "../../components/button/PrimaryButton";
import DangerButton from "../../components/button/DengerButton";
import { PropTypes } from "prop-types";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";


const PostEdit = ({ job, index }) => {

    const [post, setPost] = useState({})

    useEffect(() => {
        axios.get(`/postedData?postId=${job}`)
            .then(res => setPost(res.data))
            .catch(err => console.log(err))
    }, [job])

    const handleUpdateJob = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const jobTitle = form.jobTitle.value;
        const deadline = form.deadline.value;
        const category = form.category.value;
        const minPrice = form.minPrice.value;
        const maxPrice = form.maxPrice.value;
        const jobDescription = form.jobDescription.value;
        console.log(jobTitle, deadline, category, minPrice, maxPrice, jobDescription);
    }

    return (
        <form onSubmit={handleUpdateJob} className="p-2 mb-10">
            <div className="text-2xl font-semibold text-primary-blue"><span className="text-primary-dark">#Posted Job:</span> {post?.jobTitle} ({index + 1})</div>
            <section className=" body-font relative rounded-lg border border-primary-blue bg-base-300">
                <div className="container px-5 mt-2 mb-2 mx-auto">
                    <div className="mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                            <div className="p-2">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-sm ">User Email</label>
                                    <input type="email" autoComplete="word" id="email" defaultValue={post?.employeeEmail} disabled name="email" className="w-full bg-neutral-50 input-disabled bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primary-blue focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2">
                                <div className="relative">
                                    <label htmlFor="jobTitle" className="leading-7 text-sm ">Job Title</label>
                                    <input type="text" autoCapitalize="sentences" required defaultValue={post?.jobTitle} id="jobTitle" name="jobTitle" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primary-blue focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2">
                                <div className="relative">
                                    <label htmlFor="deadline" className="leading-7 text-sm ">Job Deadline</label>
                                    <input type="date" id="deadline" required defaultValue={post?.deadline} name="deadline" placeholder="Job Deadline" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primary-blue focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2">
                                <div className="relative">
                                    <label htmlFor="category" className="leading-7 text-sm ">Category:</label>
                                    <br />
                                    <select id="category" defaultValue={post?.category} name="category" required className="w-full bg-gray-300 rounded border border-gray-300 focus:border-primary-blue focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" >
                                        <option value="default" disabled>Select a category</option>
                                        <option value="WebDeveloper">Web Developer</option>
                                        <option value="GraphicsDesigner">Graphics Designer</option>
                                        <option value="DigitalMarketer">Digital Marketer</option>
                                    </select>
                                </div>
                            </div>
                            <div className="p-2">
                                <div className="relative">
                                    <label htmlFor="minPrice" className="leading-7 text-sm ">$ Minimum Price:</label>
                                    <input type="number" id="minPrice" defaultValue={post?.minPrice} required name="minPrice" placeholder="Minimum Price $" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primary-blue focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2">
                                <div className="relative">
                                    <label htmlFor="maxPrice" className="leading-7 text-sm ">$ Maximum Price:</label>
                                    <input type="number" id="maxPrice" defaultValue={post?.maxPrice} name="maxPrice" placeholder="Maximum Price $" className="w-full bg-gray-300 rounded border border-gray-300 focus:border-primary-blue focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 sm:col-span-2">
                                <div className="relative">
                                    <label htmlFor="jobDescription" className="leading-7 text-sm ">Job Description:</label>
                                    <textarea name="jobDescription" id="jobDescription" defaultValue={post?.jobDescription} className="w-full mx-auto bg-gray-300 rounded border border-gray-300 focus:border-primary-blue focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full flex justify-around items-center">
                                <PrimaryButton>Update</PrimaryButton>
                                <DangerButton>Delete</DangerButton>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </form>
    );
};

PostEdit.propTypes = {
    job: PropTypes.node,
    index: PropTypes.number
}

export default PostEdit;