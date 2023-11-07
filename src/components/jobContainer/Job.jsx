import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";


const Job = ({ data }) => {

    return (
        <div className=" bg-base-100 border-primary-blue hover:border-neutral-900 border rounded-md">
            <div className="flex flex-col p-3">
                <div className="flex gap-2 items-start">
                    <div>
                        <i className=" text-lg fa-regular fa-hand-point-right"></i>
                    </div>
                    <div>
                        <h2 className="font-bold">Job Title: <span className="text-primary-blue">{data?.jobTitle}</span></h2>
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
                <p>{data?.jobDescription.slice(0, 80) + '...Read more'}</p>
                <div className="card-actions mt-4 justify-between items-center">
                    <div className="font-semibold">Category: <br /> {data?.category} </div>
                    <Link to={`/jobs/${data?._id}`}>
                        <button className="rounded-none btn bg-primary-blue hover:bg-primary-blue-hover normal-case text-neutral-50">Bid Now</button></Link>
                </div>
            </div>
        </div>
    );
};

Job.propTypes = {
    data: PropTypes.object
}
export default Job;