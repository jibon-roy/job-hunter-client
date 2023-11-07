import { Link } from "react-router-dom";
import PrimaryButton from "../../components/button/PrimaryButton";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../utility/AuthProvider";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const AddJob = () => {

    const { user } = useContext(AuthContext)
    const employeeEmail = user?.email;

    const handleJobPost = (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        const jobTitle = form.jobTitle.value;
        const deadline = form.deadline.value;
        const category = form.category.value;
        const minPrice = form.minPrice.value;
        const maxPrice = form.maxPrice.value;
        const jobDescription = form.jobDescription.value;
        const job = { employeeEmail, jobTitle, deadline, category, minPrice, maxPrice, jobDescription };

        axios.post('/jobs', job)
            .then(res => {
                const postedJobs = [res.data.insertedId]
                console.log(postedJobs);
                if (res) {
                    axios.put(`/users/${employeeEmail}`, postedJobs)
                        .then()
                        .catch()
                    Swal.fire({
                        title: 'Job Added!',
                        text: 'Job Added Successful.',
                        icon: 'success',
                        confirmButtonText: 'Done',
                        confirmButtonColor: "#007efe"
                    })
                    form.reset();
                }

            })
            .catch(err => {
                if (err)
                    Swal.fire({
                        title: 'Opps Sorry!',
                        text: 'Something is Wrong.',
                        icon: 'error',
                        confirmButtonText: 'Done',
                        confirmButtonColor: "#007efe"
                    })
            })

    }

    return (
        <div>
            <Helmet>
                <title>JH | Add Job</title>
            </Helmet>
            <div className="text-sm breadcrumbs pl-5">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/add'>Add Job</Link></li>
                </ul>
            </div>
            <form onSubmit={handleJobPost}>
                <section className=" body-font relative">
                    <div className="container px-5 my-5 mx-auto">
                        <div className="flex flex-col text-center w-full mb-12">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-primary-blue">Add a Job Opportunity</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Help Us Grow: Share a New Job Opportunity</p>
                        </div>
                        <div className="lg:w-1/2 md:w-2/3 mx-auto">
                            <div className="">
                                <div className="p-2">
                                    <div className="relative">
                                        <label htmlFor="email" className="leading-7 text-sm ">User Email</label>
                                        <input type="email" value={employeeEmail} autoComplete="word" id="email" readOnly name="email" className="input-disabled w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primary-blue focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2">
                                    <div className="relative">
                                        <label htmlFor="jobTitle" className="leading-7 text-sm ">Job Title</label>
                                        <input type="text" autoCapitalize="sentences" required id="jobTitle" name="jobTitle" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primary-blue focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2">
                                    <div className="relative">
                                        <label htmlFor="deadline" className="leading-7 text-sm ">Job Deadline</label>
                                        <input type="date" id="deadline" required name="deadline" placeholder="Job Deadline" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primary-blue focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2">
                                    <div className="relative">
                                        <label htmlFor="category" className="leading-7 text-sm ">Category:</label>
                                        <br />
                                        <select id="category" name="category" required className="w-full bg-gray-300 rounded border border-gray-300 focus:border-primary-blue focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" >
                                            <option value="default" disabled>Select a category</option>
                                            <option value="Web Development">Web Development</option>
                                            <option value="Graphics Design">Graphics Design</option>
                                            <option value="Digital Marketing">Digital Marketing</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex flex-wrap">
                                    <div className="p-2 w-1/2">
                                        <div className="relative">
                                            <label htmlFor="minPrice" className="leading-7 text-sm ">Minimum Price:</label>
                                            <input type="number" id="minPrice" required name="minPrice" placeholder="Minimum Price $" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primary-blue focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>
                                    </div>
                                    <div className="p-2 w-1/2">
                                        <div className="relative">
                                            <label htmlFor="maxPrice" className="leading-7 text-sm ">Maximum Price:</label>
                                            <input type="number" id="maxPrice" required name="maxPrice" placeholder="Maximum Price $" className="w-full bg-gray-300 rounded border border-gray-300 focus:border-primary-blue focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2">
                                    <div className="relative">
                                        <label htmlFor="jobDescription" required className="leading-7 text-sm ">Job Description:</label>
                                        <textarea name="jobDescription" id="jobDescription" className="w-full mx-auto bg-gray-300 rounded border border-gray-300 focus:border-primary-blue focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
                                    </div>
                                </div>
                                <div className="p-2 w-full text-center">
                                    <PrimaryButton>Add Job</PrimaryButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
        </div>
    );
};

export default AddJob;