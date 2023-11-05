import { Link, NavLink } from "react-router-dom";
import Logo from "../logo/Logo";
import './nav.css'


const Navbar = () => {

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/jobs'>Add Job</NavLink></li>
        <li><NavLink to='/jobs'>My Posted Jobs</NavLink></li>
        <li><NavLink to='/jobs'>My Bids</NavLink></li>
        <li><NavLink to='/jobs'>Bid Requests</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
        <button className="btn bg-primary-blue hover:bg-primary-blue-hover text-base-100 normal-case">Register</button>
    </>

    return (
        <div>
            <div className="drawer text-base">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="navbar">
                        <div className="flex-1 lg:flex-none">
                            <Link to='/'><Logo></Logo></Link>
                        </div>
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 text-right hidden lg:block">
                            <ul className="menu items-center menu-horizontal">
                                {navLinks}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200">
                        {navLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;