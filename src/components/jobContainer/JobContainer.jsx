import { PropTypes } from "prop-types";
import Job from "./Job";


const JobContainer = ({ data }) => {


    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 p-2">
                {
                    data?.map(job => <Job key={job?._id} data={job}></Job>)
                }

            </div>
        </>
    );
};

JobContainer.propTypes = {
    data: PropTypes.array
}

export default JobContainer;