import { Link } from "react-router-dom";
import Logo from "../logo/Logo";


const Footer = () => {
    return (
        <div className=" bg-primary-dark  border-t text-neutral-50">
            <footer className="footer pt-14 pb-10 pl-4 grid-cols-1 md:grid-cols-4">
                <aside>
                    <Logo></Logo>
                    <p>Job Hunter Company Ltd.<br />Providing reliable Jobs since 1992 </p>
                    <p> Contact Us- <br />
                        Mail: <span className="text-primary-indigo font-medium cursor-pointer">jobhunter@headoffice.com</span> <br />
                        88 Old Chapel Road, Gatesheath, UK
                    </p>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <Link className="link link-hover">All jobs</Link>
                    <Link to='/jobs' className="link link-hover">Graphics Design</Link>
                    <Link to='/jobs' className="link link-hover">Digital Marketing</Link>
                    <Link to='/jobs' className="link link-hover">Development</Link>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <Link to='/jobs' className="link link-hover">About us</Link>
                    <Link to='/jobs' className="link link-hover">Contact</Link>
                    <Link to='/jobs' className="link link-hover">Press kit</Link>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <Link to='/jobs' className="link link-hover">Terms of use</Link>
                    <Link to='/jobs' className="link link-hover">Privacy policy</Link>
                    <Link to='/jobs' className="link link-hover">Cookie policy</Link>
                </nav>
            </footer>
            <p className="pb-4 text-center">Copyright &copy; 2019 - 2023 JobHunter®. All rights reserved.</p>
        </div>
    );
};

export default Footer;