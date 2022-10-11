import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-blue-300 p-0">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Quiz percent</a>
                </div>
                <div className="flex-none mr-6">
                    <ul className="menu menu-horizontal p-0 m-2">
                        <li ><NavLink to='/home' className={({ isActive }) => isActive ? 'p-2  font-medium bg-opacity-90 bg-orange-600 text-white' : 'p-2 font-medium'}> Home</NavLink></li>
                        <li><NavLink to='/quizes' className={({ isActive }) => isActive ? 'p-2  font-medium bg-opacity-90 bg-orange-600 text-white' : 'p-2 font-medium'}>Quizes</NavLink></li>
                        <li><NavLink to='/statistics' className={({ isActive }) => isActive ? 'p-2  font-medium bg-opacity-90 bg-orange-600 text-white' : 'p-2 font-medium'}> Statistics</NavLink></li>
                        <li><NavLink to='/blog' className={({ isActive }) => isActive ? 'p-2  font-medium bg-opacity-90 bg-orange-600 text-white' : 'p-2 font-medium'}>Blogs</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;