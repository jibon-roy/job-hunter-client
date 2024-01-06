import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobContainer from '../../components/jobContainer/JobContainer';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


const AllJobs = () => {

    const { isLoading, data: jobs } = useQuery({
        queryKey: ['jobs'],
        queryFn: async () => {
            const res = await axios.get('https://b8a11-server-side-jibon-roy.vercel.app/jobs');
            return res.data;
        }
    })


    const webDevelopmentJob = jobs?.filter(job => job.category === 'Web Development')
    const graphicsDesignerJob = jobs?.filter(job => job.category === 'Graphics Design')
    const digitalMarketingJob = jobs?.filter(job => job.category === 'Digital Marketing')
    // console.log(webDevelopmentJob);

    if (isLoading) {
        return <div className="w-full h-[90vh] flex justify-center items-center"><span className="loading flex loading-dots loading-lg"></span></div>
    }

    return (
        <div>
            <Helmet>
                <title>JH | All Jobs</title>
            </Helmet>
            <div className="text-sm breadcrumbs pl-5">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/jobs'>Jobs</Link></li>
                </ul>
            </div>
            <div className='mx-auto my-20'>
                <div className='text-center text-2xl md:text-4xl mb-5 font-semibold text-primary-indigo'>
                    Browse All Jobs by Category
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
        </div>
    );
};

export default AllJobs;