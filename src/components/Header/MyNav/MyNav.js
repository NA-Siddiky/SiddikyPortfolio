import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/Logo_Short.png';
import './MyNav.css'
const MyNav = () => {
    return (
        <header className='container'>
            <Navbar bg="" variant="light">
                <Link to='/'>
                    <img src={logo} className='logoImg' alt="" />
                </Link>
                <Nav className="ml-auto">
                    <Link to='/'>Home</Link>
                    <Link to='/'>Projects</Link>
                    <Link to='/'>Blog</Link>
                    <Link to='/'>About</Link>
                    <Link to='/'>Contact</Link>
                </Nav>
            </Navbar>
        </header>
    );
};

export default MyNav;