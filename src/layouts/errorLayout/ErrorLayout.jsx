import { Helmet } from 'react-helmet-async';
import errorPage from '/error_page.jpg'

const ErrorLayout = () => {
    return (
        <div>
            <Helmet>
                <title>JH | 404 Error Page !</title>
            </Helmet>
            <div className="flex h-[100vh] justify-center items-center w-full text-primary-blue">
                <div>
                    <img src={errorPage} className='w-full' alt="" />
                </div>
            </div>
        </div>
    );
};

export default ErrorLayout;