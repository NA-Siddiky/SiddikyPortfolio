import React from 'react';
import About from '../../Home/About/About';
import MyNav from '../MyNav/MyNav';
import Slider from '../Slider/Slider';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='headerStyle'>
                <MyNav></MyNav>
                <Slider></Slider>
                <About></About>
            </div>

        </div>

    );
};

export default Header;