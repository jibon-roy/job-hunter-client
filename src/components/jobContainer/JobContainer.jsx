import Jobs from "./Jobs";


const JobContainer = () => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 p-2">
                <Jobs></Jobs>
                <Jobs></Jobs>
                <Jobs></Jobs>
                <Jobs></Jobs>
            </div>
        </>
    );
};

export default JobContainer;