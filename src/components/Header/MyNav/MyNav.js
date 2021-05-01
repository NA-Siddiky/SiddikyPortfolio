import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/Logo_Short.png';
import './MyNav.css'
const MyNav = () => {
    return (
        <header>
            <Navbar bg="" variant="light" className='styleOfNav'>
                <ul>
                    <Link className="nav-link mr-4 text-Blue" to="/">
                        <img src={logo} className='logoImg' alt="" />
                    </Link>
                </ul>
                <Nav className="ml-auto">

                    <li className="nav-item active">
                        <Link className="nav-link mr-4 text-Blue" to="/">Home</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link  text-Blue" to="/">Projects</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link mr-4 text-Blue" to="/">Blog</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link mr-4 text-Blue" to="/">About</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link mr-4 text-Blue" to="/">Contact</Link>
                    </li>
                </Nav>
            </Navbar>
        </header>
    );
};

export default MyNav;