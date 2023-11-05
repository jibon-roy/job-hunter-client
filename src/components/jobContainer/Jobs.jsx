


const Jobs = () => {
    return (
        <div className=" bg-base-100 border-primary-blue hover:border-neutral-900 border rounded-md">
            <div className="flex flex-col p-3">
                <div className="flex gap-2 items-center">
                    <div>
                        <i className="text-primary-blue text-lg fa-regular fa-hand-point-right"></i>
                    </div>
                    <div>
                        <h2 className="card-title">Job:</h2>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <div>
                        <i className="text-primary-blue text-lg fa-regular fa-calendar-xmark"></i>
                    </div>
                    <div>
                        <p className="font-semibold">Deadline:</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center mb-3">
                    <div>
                        <i className="text-primary-blue text-lg fa-solid fa-dollar-sign"></i>
                    </div>
                    <div>
                        <p className="font-semibold">Price range:</p>
                    </div>
                </div>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-between items-center">
                    <div>Category: </div>
                    <button className="rounded-none btn bg-primary-blue hover:bg-primary-blue-hover normal-case text-neutral-50">Bid Now</button>
                </div>
            </div>
        </div>
    );
};

export default Jobs;