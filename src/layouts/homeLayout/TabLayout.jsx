import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobContainer from '../../components/jobContainer/JobContainer';


const TabLayout = () => {
    return (
        <div className='mx-auto my-20'>
            <div className='text-center text-4xl mb-5 font-semibold text-primary-blue'>
                Browse Jobs by Category
            </div>
            <div className='text-center mb-14 font-semibold'>
                Find the job you deserve.
            </div>
            <div className='my-10'>
                <Tabs>
                    <TabList style={{ borderBottom: '1px solid #007efe', textAlign: 'center' }}>
                        <Tab>Web Developer</Tab>
                        <Tab>Graphics Designer</Tab>
                        <Tab>Digital Marketer</Tab>
                    </TabList>

                    <div className='my-10'>
                        <TabPanel>
                            <JobContainer></JobContainer>
                        </TabPanel>
                        <TabPanel>
                            <JobContainer></JobContainer>
                        </TabPanel>
                        <TabPanel>
                            <JobContainer></JobContainer>
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
        </div>
    );
};

export default TabLayout;