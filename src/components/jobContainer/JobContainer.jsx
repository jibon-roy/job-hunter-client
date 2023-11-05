import Job from "./Job";


const JobContainer = () => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 p-2">
                <Job></Job>
                <Job></Job>
                <Job></Job>
                <Job></Job>
            </div>
        </>
    );
};

export default JobContainer;