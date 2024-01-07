import CountUp from 'react-countup';
import Header from '../../components/Header/Header';

const Statistics = () => {
    return (
        <div className=' my-40'>
            <Header header={'Our Statics'} title={'Our incresing rate'}></Header>
            <div className="stats flex rounded-none bg-primary-dark shadow justify-center">
                <div className="stat my-10 place-items-center">
                    <div className="stat-title text-primary-white">Downloads</div>
                    <div className="stat-value text-primary-white">
                        <CountUp
                            start={4000}
                            end={6500}
                            enableScrollSpy={true}
                        >
                            {({ countUpRef}) => (
                                <div>
                                    <span ref={countUpRef} />
                                </div>
                            )}
                        </CountUp>
                    </div>
                    <div className="stat-desc text-primary-white">From January 1st to February 1st</div>
                </div>

                <div className="stat my-10 place-items-center">
                    <div className="stat-title text-primary-white">Users</div>
                    <div className="stat-value text-secondary">
                        <CountUp
                            start={1000}
                            end={3680}
                            enableScrollSpy={true}
                        >
                            {({ countUpRef }) => (
                                <div>
                                    <span ref={countUpRef} />
                                </div>
                            )}
                        </CountUp>
                    </div>
                    <div className="stat-desc text-secondary ">↗︎ 40 (2%)</div>
                </div>

                <div className="stat my-10 text-primary-white place-items-center">
                    <div className="stat-title text-primary-white">New Registers</div>
                    <div className="stat-value">
                        <CountUp
                            start={500}
                            end={1200}
                            enableScrollSpy={true}
                        >
                            {({ countUpRef }) => (
                                <div>
                                    <span ref={countUpRef} />
                                </div>
                            )}
                        </CountUp>
                    </div>
                    <div className="stat-desc text-primary-white">↘︎ 90 (14%)</div>
                </div>

            </div>
        </div>
    );
};

export default Statistics;