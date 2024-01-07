import { Link } from "react-router-dom";
import TabLayout from "./TabLayout";
import Banner from "./banner";
import { Helmet } from "react-helmet-async";
import Statistics from "./Statistics";
import BrowsJobsByCategory from "./BrowsJobsByCategory";


const HomeLayout = () => {



    return (
        <div>
            <Helmet>
                <title>Job Hunter | Home</title>
            </Helmet>
            <section>
                <Banner></Banner>
            </section>
            <section data-aos="fade-up" data-aos-duration='700'>
                <BrowsJobsByCategory></BrowsJobsByCategory>
            </section>
            <section data-aos="fade-up" data-aos-duration='700'>
                <TabLayout></TabLayout>
                <div className='text-xl flex justify-center font-semibold items-center my-10'>
                    <Link to='/jobs' className='text-primary-indigo mb-20 hover:no-underline underline'>Explore More  &#187;</Link>
                </div>
            </section>
         
            <section data-aos="fade-up" data-aos-duration='700'>
                <div className="hero min-h-[70vh] text-primary-white bg-primary-indigo">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src="https://graduate.northeastern.edu/resources/wp-content/uploads/sites/4/2018/10/shaking-hands-business-people-unsplash.jpg" className=" w-[70%] md:w-[50%] rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold max-md:text-center">Get Start with us</h1>
                            <p className="py-6 px-3 text-justify max-md:text-center">
                                Our job hunter website is your gateway to a world of career opportunities. By
                                registering on our platform, you unlock a multitude of benefits. First and foremost, it grants you
                                access to an extensive database of job listings, increasing your chances of finding the perfect job. Additionally, creating a profile
                                allows you to showcase your skills and experience to potential employers, making you more visible in the job market. Furthermore, registration
                                enables personalized job alerts, ensuring you never miss out on the latest openings tailored to your preferences. Join us today to supercharge your job search!
                            </p>
                            <Link to='/register' className="btn bg-primary-indigo text-primary-white hover:bg-primary-indigo-hover">Get Started</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section data-aos="fade-up" data-aos-duration='700'>
                <Statistics></Statistics>
            </section>
            <section data-aos="fade-up" data-aos-duration='700'>
                <div className="hero min-h-[70vh] text-right max-md:text-center">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src="https://www.marketing91.com/wp-content/uploads/2020/02/What-Is-Job-Sharing.jpg" className="w-[70%] md:w-[40%] rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold text-primary-indigo">Shere your jobs</h1>
                            <p className="py-6 px-3 text-justify">Share your job on our website to reach a diverse and motivated talent pool. Posting your job is easy and effective, as our platform connects you with qualified candidates actively seeking opportunities. Maximize your recruitment efforts and find the perfect fit for your team by sharing your job on our website.</p>
                            <Link to='/register' className="btn bg-primary-indigo text-primary-white hover:bg-primary-indigo-hover">Get Started</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomeLayout;