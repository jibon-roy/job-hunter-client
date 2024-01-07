import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobContainer from '../../components/jobContainer/JobContainer';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


const TabLayout = () => {

    // const [jobs, setJobs] = useState({});

    const { isLoading, data: jobs } = useQuery({
        queryKey: ['jobs'],
        queryFn: async () => {
            const res = await axios.get('https://job-hunter-server-dun.vercel.app/jobs');
            return res.data;
        }
    })

    // console.log(jobs);
    // useEffect(() => {
    //     axios.get('/jobs')
    //         .then(res => setJobs(res.data))
    //         .catch(err => console.log(err))
    // }, [])

    const webDevelopmentJob = jobs?.filter(job => job.category === 'Web Development').slice(0, 4)
    const graphicsDesignerJob = jobs?.filter(job => job.category === 'Graphics Design').slice(0, 4)
    const digitalMarketingJob = jobs?.filter(job => job.category === 'Digital Marketing').slice(0, 4)
    // console.log(webDevelopmentJob);

    if (isLoading) {
        return <div className="w-full h-[90vh] flex justify-center items-center"><span className="loading flex loading-dots loading-lg"></span></div>
    }

    return (
        <div className='mx-auto my-20'>
            <div className='text-center text-2xl md:text-4xl mb-5 font-semibold text-primary-indigo'>
                Job Market
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
                            {/* {isError ? <div className='text-center my-10 text-red font'>Data Loading failed.</div> : <JobContainer data={webDevelopmentJob}></JobContainer>} */}
                            <JobContainer data={webDevelopmentJob}></JobContainer>
                        </TabPanel>
                        <TabPanel>
                            <JobContainer data={graphicsDesignerJob}></JobContainer>
                        </TabPanel>
                        <TabPanel>
                            <JobContainer data={digitalMarketingJob}></JobContainer>
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
        </div>
    );
};

export default TabLayout;