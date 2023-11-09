import { Helmet } from 'react-helmet-async';
import errorPage from '/error_page.jpg'
import PrimaryButton from '../../components/button/PrimaryButton';
import { Link } from 'react-router-dom';

const ErrorLayout = () => {
    return (
        <div>
            <Helmet>
                <title>JH | 404 Error Page !</title>
            </Helmet>
            <div className="flex h-[100vh] justify-center items-center w-full text-primary-blue">
                <div className='text-center'>
                    <Link to='/' className='mb-5'><PrimaryButton>Back to Home</PrimaryButton></Link>
                    <img src={errorPage} className='w-full' alt="" />
                </div>
            </div>
        </div>
    );
};

export default ErrorLayout;