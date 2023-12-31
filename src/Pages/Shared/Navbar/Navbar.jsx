import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import {  BiSolidUserCircle } from 'react-icons/bi';

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
        .then(() => {})
        .catch(error => console.log(error));
    }
    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='explore'>Explore</Link></li>
        <li><Link to='/create'>Create Survey</Link></li>
        {/* <li><Link to='/pro'>Be A Pro</Link></li> */}
        <li><Link to='/dashboard/survey'>My Survey</Link></li>

        
       
        {
            user ? <>
            <button onClick={handleLogOut}className="btn btn-ghost">Log Out</button>
            </> : <>
            <li><Link to='/login'>Login</Link></li>
            </>
        }
        </>
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl font-bold text-green-600">SERVEY</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                {
                    user ? <div className="lg:flex justify-center items-center lg:gap-3">
                        <p className="font-bold w-1/2 lg:w-full">{user.displayName}</p>
                        <img className="w-10 h-10 rounded-full" src={user.photoURL} alt="" />
                    </div> : <BiSolidUserCircle className="w-10 h-10"></BiSolidUserCircle>
                   }
                </div>
            </div>

        </>
    );
};

export default Navbar;