import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/logo.svg'
import { BsHandbag, BsSearch } from 'react-icons/bs';


const Header = () => {
    const menuItems = <>
        <ul className='font-semibold menu menu-vertical lg:menu-horizontal menu-compact dropdown-content bg-gray-50 lg:bg-base-100'>
            <Link to="/home" className='px-10 py-5'>Home</Link>
            <Link to="/home" className='px-10 py-5'>About</Link>
            <Link to="/home" className='px-10 py-5'>Services</Link>
            <Link to="/home" className='px-10 py-5'>Blog</Link>
            <Link to="/home" className='px-10 py-5'>Contact</Link>
        </ul>

    </>


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown lg:hidden">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    {menuItems}
                </div>
                <img src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                {menuItems}
            </div>
            <div className="navbar-end gap-5">
                <Link to="/"><BsHandbag /></Link>
                <Link to="/"><BsSearch /></Link>
                <Link className="btn btn-outline btn-primary">Appointment</Link>

            </div>
        </div>
    );
};

export default Header;