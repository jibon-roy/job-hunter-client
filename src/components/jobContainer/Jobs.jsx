import logo from "/logo.png";


const Jobs = () => {
    return (
        <div className=" bg-base-100 border-primary-blue hover:border-neutral-900 border rounded-md">
            <div className="flex flex-col p-3">
                <div className="flex gap-3 items-center">
                    <div>
                        <img src={logo} className="w-5" alt="" />
                    </div>
                    <div>
                        <h2 className="card-title">Job title!</h2>
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    <div>
                        <img src={logo} className="w-5" alt="" />
                    </div>
                    <div>
                        <p>Deadline</p>
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    <div>
                        <img src={logo} className="w-5" alt="" />
                    </div>
                    <div>
                        <p>Price range</p>
                    </div>
                </div>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="rounded-none btn bg-primary-blue hover:bg-primary-blue-hover normal-case text-neutral-50">Bid Now</button>
                </div>
            </div>
        </div>
    );
};

export default Jobs;