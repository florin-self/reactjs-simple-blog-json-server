import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = props => {
    return (
        <header className="header">
            <nav className="headerMenu">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/newpost">New Post</NavLink>
            </nav>
        </header>
    );
}

export default Header;
