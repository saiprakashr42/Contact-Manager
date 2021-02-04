import React from 'react';
import { Link } from 'react-router-dom'

function Header(props) {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
            <div className="container">
                <a href="/" className="navbar-brand">{props.branding}</a>

            </div>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        Home</Link>
                </li>


                <li className="nav-item">
                    <Link to="/contact/add" className="nav-link">Add</Link>
                </li>

                <li className="nav-item">
                    <Link to="/about" className="nav-link">About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header;



