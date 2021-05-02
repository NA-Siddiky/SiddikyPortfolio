import React from 'react';
import HeaderBody from '../HeaderBody/HeaderBody';
// import Slider from '../Slider/Slider';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='headerStyle'>
                {/* <MyNav></MyNav> */}
                {/* <Slider></Slider> */}
                <HeaderBody></HeaderBody>

            </div>

        </div>

    );
};

export default Header;