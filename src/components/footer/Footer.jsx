import Logo from "../logo/Logo";


const Footer = () => {
    return (
        <div className=" bg-neutral-200 border-t-primary-dark border-t">
            <footer className="footer pt-14 pb-5 pl-4 grid-cols-1 md:grid-cols-4">
                <aside>
                    <Logo></Logo>
                    <p>Job Hunter Company Ltd.<br />Providing reliable Jobs since 1992 </p>
                    <p> Contact Us- <br />
                        Mail: <span className="text-primary-dark-blue font-medium cursor-pointer">jobhunter@headoffice.com</span> <br />
                        88 Old Chapel Road, Gatesheath, UK
                    </p>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <p className="pb-4 bg-neutral-200 text-center">Copyright &copy; 2019 - 2023 JobHunter®. All rights reserved.</p>
        </div>
    );
};

export default Footer;