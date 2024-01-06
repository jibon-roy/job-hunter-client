import { Link } from "react-router-dom";
import google from '../../assets/google.png';
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../utility/AuthProvider";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const LoginLayout = () => {


    const { logInWithEmailPassword, loginWithGoogle } = useContext(AuthContext);

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const email = form.email.value;
        const password = form.password.value;

        logInWithEmailPassword(email, password)
            .then(res => {
                if (res.user) {
                    Swal.fire({
                        title: 'Thank you!',
                        text: 'Login Successful',
                        icon: 'success',
                        confirmButtonText: 'Done',
                        confirmButtonColor: "#007efe"
                    }).then(() => {
                        location.reload();

                    });
                }
            })
            .catch(err => {
                if (err) {
                    Swal.fire({
                        title: 'Opps Sorry!',
                        text: 'Username or Password Invalid',
                        icon: 'error',
                        confirmButtonText: 'Done',
                        confirmButtonColor: "#007efe"
                    }).then(() => {
                        location.reload();
                    })
                }
            })

        form.reset();
    }

    return (
        <div>
            <Helmet>
                <title> JH | Login</title>
            </Helmet>
            <form onSubmit={handleLoginSubmit} className="text-gray-600 min-h-[80vh] flex items-center body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                    <div className="lg:w-3/5 lg:ml-10 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                        <h1 className="title-font  font-medium text-5xl text-primary-indigo">Employability Test<br /><br /></h1>
                        <div className="leading-relaxed mt-4">
                            <p className="max-w-lg">Step forward to an Employability Test and Stand out exceptionally among thousands of jobseekers. It helps to-</p>
                            <br />
                            - Know the intellectual qualifications and hidden soft skills.
                            <br />
                            - Secure the next step of recruitment process.
                            <br />
                            - Increase the number of interview calls.
                        </div>
                    </div>
                    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 border border-neutral-700 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h2 className="text-gray-900 text-2xl font-medium title-font mb-5"><span className="text-primary-indigo">Job Hunter</span> Log In</h2>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" required name="email" autoComplete="true" placeholder="example@gmail.com" className="w-full bg-white rounded border border-primary-dark focus:focus:border-primary-indigo focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                            <input type="password" required autoComplete="false" id="password" placeholder="Password" name="password" className="w-full bg-white rounded border border-primary-dark focus:border-primary-indigo focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <button type="submit" className="text-white btn normal-case hover:bg-primary-indigo-hover font-medium text-neutral-50 bg-primary-indigo border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</button>
                        <p className="text-sm text-gray-500 mt-3">Do not have an account? Please  <Link to='/register'><span className="text-primary-indigo font-medium">Register</span>.</Link></p>
                        <div className="divider">OR</div>
                        <button onClick={loginWithGoogle} className="text-white btn normal-case font-medium  border-0 py-2 px-8 focus:outline-none  rounded text-base"><img src={google} className="w-5" />Google</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LoginLayout;