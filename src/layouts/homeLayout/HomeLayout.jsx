import { Link } from "react-router-dom";
import TabLayout from "./TabLayout";
import Banner from "./banner";
import { Helmet } from "react-helmet-async";


const HomeLayout = () => {



    return (
        <div>
            <Helmet>
                <title>Job Hunter | Home</title>
            </Helmet>
            <section>
                <Banner></Banner>
            </section>
            <section>
                <TabLayout></TabLayout>
                <div className='text-xl flex justify-center font-semibold items-center my-10'>
                    <Link to='/jobs' className='text-primary-blue hover:no-underline underline'>Explore More  &#187;</Link>
                </div>
            </section>
        </div>
    );
};

export default HomeLayout;