import { Link, NavLink } from "react-router-dom";
import Logo from "../logo/Logo";
import Avatar from "../../assets/avatar.jpg"
import './nav.css'
import { useContext } from "react";
import { AuthContext } from "../../utility/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/jobs'>Jobs</NavLink></li>
        {user ?
            <>
                <li><NavLink to='/add'>Add Job</NavLink></li>
                <li><NavLink to='/posted'>My Posted Jobs</NavLink></li>
                <li><NavLink to='/bids'>My Bids</NavLink></li>
                <li><NavLink to='/requests'>Bid Requests</NavLink></li>
            </> :
            <></>
        }
        {user ? <>
            <div className="btn my-btn rounded-full normal-case avatar flex justify-center items-center gap-2">
                <div className="w-10 rounded-full">
                    <img src={user?.photoURL ? user?.photoURL : Avatar} alt="" />
                </div>
                <p>{user?.displayName}</p>
            </div>
            <li><Link><button onClick={logOut} className="btn bg-primary-indigo hover:bg-primary-indigo-hover text-base-100 normal-case">Log out</button></Link></li>
        </>
            : <>
                <li><NavLink to='/login' >Login</NavLink></li>
                <li><Link to='/register'><button className="btn bg-primary-indigo hover:bg-primary-indigo-hover text-base-100 normal-case">Register</button></Link></li>
            </>
        }

    </>

    return (
        <div>
            <div className="drawer z-50 text-base ">
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
                <div className="drawer-side lg:hidden">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 min-h-full bg-base-200">
                        <li className="text-primary-white p-2 bg-primary-indigo">Menu</li>
                        {navLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;