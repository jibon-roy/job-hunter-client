import { Link } from "react-router-dom";
import TabLayout from "./TabLayout";
import Banner from "./banner";


const HomeLayout = () => {
    return (
        <div>
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