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
            <Tabs>
                <TabList style={{ borderBottom: '1px solid #007efe', textAlign: 'center' }}>
                    <Tab>Web Developer</Tab>
                    <Tab>Graphics Designer</Tab>
                    <Tab>Digital Marketer</Tab>
                </TabList>

                <TabPanel>
                    <JobContainer></JobContainer>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabLayout;