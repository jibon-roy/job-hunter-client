import { Link } from "react-router-dom";
import google from '../../assets/google.png';
import register from '../../assets/register.webp';

const RegisterLayout = () => {
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.url.value;
        console.log(name, email, password, photoUrl);
    }

    return (
        <div>
            <form onSubmit={handleLoginSubmit} className="text-gray-600 min-h-[80vh] flex items-center body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                    <div className="lg:w-3/5 lg:ml-10 md:w-1/2 max-lg:text-center max-lg:mx-auto md:pr-16 lg:pr-0 md:-mt-40 pr-0">
                        <img src={register} className="w-60 max-lg:mx-auto" alt="" />
                        <h1 className="title-font text-3xl font-medium lg:text-5xl text-primary-blue">On registering, you can<br /><br /></h1>
                        <div className="leading-relaxed mt-4">
                            <p className="max-w-lg">
                                - Build your profile and let recruiters find you
                                <br></br>
                                - Get job postings delivered right to your email
                                <br />
                                - Find a job and grow your career
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 border border-neutral-700 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h2 className="text-gray-900 text-2xl font-medium title-font mb-5"><span className="text-primary-blue">Job Hunter</span> Register</h2>
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                            <input type="name" id="name" name="name" autoComplete="true" placeholder="Your name" className="w-full bg-white rounded border border-primary-dark focus:focus:border-primary-blue focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" autoComplete="true" placeholder="example@gmail.com" className="w-full bg-white rounded border border-primary-dark focus:focus:border-primary-blue focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="password" className="leading-7 text-sm text-gray-600">Strong Password</label>
                            <input type="password" autoComplete="false" id="password" placeholder="Password" name="password" className="w-full bg-white rounded border border-primary-dark focus:border-primary-blue focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="url" className="leading-7 text-sm text-gray-600">Profile Picture URL</label>
                            <input type="url" autoComplete="false" id="url" placeholder="Photo Url" name="url" className="w-full bg-white rounded border border-primary-dark focus:border-primary-blue focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <button type="submit" className="text-white btn normal-case hover:bg-primary-blue-hover font-medium text-neutral-50 bg-primary-blue border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Login</button>
                        <p className="text-sm text-gray-500 mt-3">Already have an account? Please <Link to='/login'><span className="text-primary-blue font-medium">Login</span>.</Link></p>
                        <div className="divider">OR</div>
                        <button className="text-white btn normal-case font-medium  border-0 py-2 px-8 focus:outline-none  rounded text-base"><img src={google} className="w-5" />Google</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default RegisterLayout;