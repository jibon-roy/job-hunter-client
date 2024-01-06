import CountUp from 'react-countup';
import Header from '../../components/Header/Header';

const Statistics = () => {
    return (
        <div>
            <Header header={'Our Statics'} title={'Our incresing rate'}></Header>
            <div className="stats flex shadow justify-center mb-40">
                <div className="stat place-items-center">
                    <div className="stat-title">Downloads</div>
                    <div className="stat-value">
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
                    <div className="stat-desc">From January 1st to February 1st</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Users</div>
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
                    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">New Registers</div>
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
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>
        </div>
    );
};

export default Statistics;