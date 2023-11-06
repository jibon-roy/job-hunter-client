import PrimaryButton from "../../components/button/PrimaryButton";


const JobBidInput = () => {

    const handleBidSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const amount = form.amount.value;
        const deadline = form.deadline.value;
        console.log(amount, deadline);
    }

    return (
        <form onSubmit={handleBidSubmit}>
            <section className=" body-font relative">
                <div className="container px-5 my-5 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-primary-blue">Place your Bid</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Get your job and find the way of life.</p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="">
                            <div className="p-2">
                                <div className="relative">
                                    <label htmlFor="amount" className="leading-7 text-sm ">Your bid price:</label>
                                    <input type="number" id="amount" required name="amount" placeholder="Your bidding amount $" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primary-blue focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2">
                                <div className="relative">
                                    <label htmlFor="deadline" className="leading-7 text-sm ">Job deadline:</label>
                                    <input type="date" id="deadline" required name="deadline" placeholder="Job Deadline" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primary-blue focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2">
                                <div className="relative">
                                    <label htmlFor="myEmail" className="leading-7 text-sm ">User email:</label>
                                    <input type="email" id="myEmail" disabled name="myEmail" placeholder="example@gmail.com" className="w-full bg-gray-300 input-disabled rounded border border-gray-300 focus:border-primary-blue focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2">
                                <div className="relative">
                                    <label htmlFor="buyerEmail" className="leading-7 text-sm ">Employee email:</label>
                                    <input type="email" id="buyerEmail" disabled name="buyerEmail" placeholder="example@gmail.com" className="w-full bg-gray-300 input-disabled rounded border border-gray-300 focus:border-primary-blue focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full text-center">
                                <PrimaryButton>Bid Now</PrimaryButton>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </form>
    );
};

export default JobBidInput;