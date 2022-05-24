import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/parts">Parts</Link></li>
        <li><Link to="/review">Review</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
    </>
    return (
        <div className="navbar bg-primary text-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <div className="normal-case text-2xl font-bold flex flex-col">
                    <Link to="/">Powertrain</Link>
                    <span className='text-xs font-thin'>manufacturer industry</span>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/" className="btn text-base-100">Login</Link>
            </div>
        </div>
    );
};

export default Header;