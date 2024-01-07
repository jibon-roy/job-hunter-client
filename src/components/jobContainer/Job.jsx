import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { motion } from "framer-motion"

const Job = ({ data }) => {

    return (
        <motion.div whileHover={{ scale: 1.02 }} data-aos="fade-zoom-in"
            className=" bg-base-100 border-primary-indigo  border rounded-md">
            <div className="flex flex-col p-3">
                <div className="flex gap-2 items-start">
                    <div>
                        <i className=" text-lg fa-regular fa-hand-point-right"></i>
                    </div>
                    <div>
                        <h2 className="font-bold">Job Title: <span className="text-primary-indigo">{data?.jobTitle}</span></h2>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <div>
                        <i className="text-red text-lg fa-regular fa-calendar-xmark"></i>
                    </div>
                    <div>
                        <p className="font-semibold">Deadline: {data?.deadline}</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center mb-3">
                    <div>
                        <i className="text-green text-lg fa-solid fa-dollar-sign"></i>
                    </div>
                    <div>
                        <p className="font-semibold">Price range: {'$' + data?.minPrice + " - " + '$' + data?.maxPrice}</p>
                    </div>
                </div>
                <p>{data?.jobDescription.slice(0, 80)}<Link className="text-primary-indigo" to={`/jobs/${data?._id}`}>...Read more</Link></p>
                <div className="card-actions mt-4 justify-between items-center">
                    <div className="font-semibold">Category: <br /> {data?.category} </div>
                    <Link to={`/jobs/${data?._id}`}>
                        <button className="rounded-none btn bg-primary-indigo hover:bg-primary-indigo-hover normal-case text-neutral-50">Bid Now</button></Link>
                </div>
            </div>
        </motion.div>
    );
};

Job.propTypes = {
    data: PropTypes.object
}
export default Job;