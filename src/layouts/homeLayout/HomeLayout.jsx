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
            </section>
        </div>
    );
};

export default HomeLayout;