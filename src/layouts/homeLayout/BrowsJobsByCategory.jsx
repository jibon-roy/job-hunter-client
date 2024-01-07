import Header from "../../components/Header/Header";
import { motion } from "framer-motion"
import PrimaryButton from "../../components/button/PrimaryButton";

const BrowsJobsByCategory = () => {
    return (
        <>
            <div className="body-font my-20">
                <Header header={'Browse Jobs by Category'}></Header>
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 lg:w-1/3" data-aos='fade-right'>
                            <motion.div whileHover={{ scale: 1.02 }} className="h-full bg-primary-white border border-primary-indigo px-8 pt-8 pb-16 rounded-lg overflow-hidden text-center relative">
                                <h2 className="tracking-widest text-xs title-font font-medium  mb-1">GET HIRED AS</h2>
                                <h1 className="title-font sm:text-2xl text-xl font-medium text-primary-indigo mb-3">Web developer </h1>
                                <p className="leading-relaxed mb-5">Apply with proper skills and knowledge as an web developer. Stay here to get hired and successed the target. </p>
                                <PrimaryButton width={'full'}>
                                    Learn More
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </PrimaryButton>
                                <div className="text-center leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                    <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1">
                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>1.2K
                                    </span>
                                </div>
                            </motion.div>
                        </div>
                        <div className="p-4 lg:w-1/3" data-aos='fade-up'>
                            <motion.div whileHover={{ scale: 1.02 }} className="h-full bg-primary-white border border-primary-indigo px-8 pt-8 pb-16 rounded-lg overflow-hidden text-center relative">
                                <h2 className="tracking-widest text-xs title-font font-medium  mb-1">GET HIRED AS</h2>
                                <h1 className="title-font sm:text-2xl text-xl font-medium text-primary-indigo mb-3">Web developer </h1>
                                <p className="leading-relaxed mb-5">Apply with proper skills and knowledge as an web developer. Stay here to get hired and successed the target. </p>
                                <PrimaryButton width={'full'}>
                                    Learn More
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </PrimaryButton>
                                <div className="text-center leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                    <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1">
                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>1.2K
                                    </span>
                                </div>
                            </motion.div>
                        </div>
                        <div className="p-4 lg:w-1/3" data-aos='fade-left'>
                            <motion.div whileHover={{ scale: 1.02 }} className="h-full bg-primary-white border border-primary-indigo px-8 pt-8 pb-16 rounded-lg overflow-hidden text-center relative">
                                <h2 className="tracking-widest text-xs title-font font-medium  mb-1">GET HIRED AS</h2>
                                <h1 className="title-font sm:text-2xl text-xl font-medium text-primary-indigo mb-3">Web developer </h1>
                                <p className="leading-relaxed mb-5">Apply with proper skills and knowledge as an web developer. Stay here to get hired and successed the target. </p>
                                <PrimaryButton width={'full'}>
                                    Learn More
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </PrimaryButton>
                                <div className="text-center leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                    <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1">
                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>1.2K
                                    </span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BrowsJobsByCategory;