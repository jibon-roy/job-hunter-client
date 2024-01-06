import { useContext } from "react";
import PrimaryButton from "../../components/button/PrimaryButton";
import { AuthContext } from "../../utility/AuthProvider";
import { PropTypes } from "prop-types";
import axios from "axios";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { useNavigate } from "react-router-dom";

const JobBidInput = ({ title, employee, jobId }) => {

    const { user } = useContext(AuthContext)

    const navigate = useNavigate();

    const handleBidSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const amount = form.amount.value;
        const deadline = form.deadline.value;


        const bidData = { jobId: jobId, title, employee, amount, deadline, status: false }

        const employeeData = { jobId, email: user?.email, title, amount, deadline, status: false }

        axios.put(`/user/bid?setEmail=${user?.email}`, bidData)
            .then(res => {
                if (res) {
                    axios.put(`/user/request?jobId=${jobId}`, employeeData)
                        .then()
                        .catch()
                    Swal.fire({
                        title: 'Bid Successful!',
                        text: 'Job Bided Successful.',
                        icon: 'success',
                        confirmButtonText: 'Done',
                        confirmButtonColor: "#007efe"
                    }).then(navigate('/bids'))
                    form.reset()
                }
            }).catch(err => {
                if (err)
                    Swal.fire({
                        title: 'Bid Unsuccessful!',
                        text: 'Job Bid Not Successful.',
                        icon: 'error',
                        confirmButtonText: 'Done',
                        confirmButtonColor: "#007efe"
                    })
            })

    }

    return (
        <form onSubmit={handleBidSubmit}>
            <section className=" body-font relative">
                <div className="container px-5 my-5 mx-auto">
                    <div className="flex flex-col text-center w-full mb-5">
                        <h1 className="sm:text-3xl mt-5 text-2xl font-medium title-font mb-2 text-primary-indigo">Place your Bid</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Get your job and find the way of life.</p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="">
                            <div className="p-2">
                                <div className="relative">
                                    <label htmlFor="amount" className="leading-7 text-sm ">Your bid price:</label>
                                    <input type="number" id="amount" required name="amount" placeholder="Your bidding amount $" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primary-indigo focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2">
                                <div className="relative">
                                    <label htmlFor="deadline" className="leading-7 text-sm ">Job deadline:</label>
                                    <input type="date" id="deadline" required name="deadline" placeholder="Job Deadline" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primary-indigo focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2">
                                <div className="relative">
                                    <label htmlFor="myEmail" className="leading-7 text-sm ">User email:</label>
                                    <input type="email" id="myEmail" readOnly value={user?.email} name="myEmail" placeholder="example@gmail.com" className="w-full bg-gray-300 input-disabled rounded border border-gray-300 focus:border-primary-indigo focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2">
                                <div className="relative">
                                    <label htmlFor="buyerEmail" className="leading-7 text-sm ">Employee email:</label>
                                    <input type="email" id="buyerEmail" readOnly value={employee} name="buyerEmail" placeholder="example@gmail.com" className="w-full bg-gray-300 input-disabled rounded border border-gray-300 focus:border-primary-indigo focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full text-center">
                                {
                                    user?.email === employee ? <p className="text-red font-medium text-lg">You can not bid your own posted job!</p>
                                        :
                                        <PrimaryButton>Bid Now</PrimaryButton>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </form>
    );
};

JobBidInput.propTypes = {
    employee: PropTypes.node,
    jobId: PropTypes.node,
    title: PropTypes.node
}


export default JobBidInput;