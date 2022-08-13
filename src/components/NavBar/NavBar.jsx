import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends React.Component {
    render() {
        return (
            <nav className="header-bar">
                <Link to="/home" className="">Home</Link>
                <Link to="/about" className="">About Us</Link>
                <Link to="/competitive" className="">Competitive</Link>
                <Link to="/contact" className="">Contact</Link>
            </nav>
        )
    }
}

export default NavBar;