import React from 'react';
import About from '../../Home/About/About';
import MyNav from '../MyNav/MyNav';

const Header = () => {
    return (
        <div>
            <MyNav></MyNav>
            <About></About>
            <h1>Header</h1>
        </div>

    );
};

export default Header;