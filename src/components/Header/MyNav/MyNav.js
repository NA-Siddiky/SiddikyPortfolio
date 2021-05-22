import React from 'react';
import logo from '../../../images/Logo_Short.png';
import './MyNav.css'
const MyNav = () => {
    return (
        <header className='sticky-top navStyle'>

            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand ps-6" href="#home"><img className='logoImg' src={logo} alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto text-style pe-6">
                            <li className="nav-item">
                                <a className="nav-link mr-4 text-Blue " href="#home">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mr-4 text-Blue " href="#projects">PROJECTS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mr-4 text-Blue " href="#blog">BLOG</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mr-4 text-Blue" href="#about">ABOUT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mr-4 text-Blue" href="#contact">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </header>
    );
};

export default MyNav;