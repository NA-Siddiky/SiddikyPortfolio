import React from 'react';
import profile from '../../../images/siddiky.png'
import './HeaderBody.css'

const HeaderBody = () => {
    return (
        <div className="row styleOfHeader">
            <div className="col-md-8">
                <h1>Hello, I'M <br></br> <span className="name-highlight"></span>N.A Siddiky</h1>
                <h3>A Full stack Web Developer</h3>
                <p>Software engineer with professional experience in web development and information security system.</p>
            </div>
            <div className="col-md-4">
                <img className="profileImage" src={profile} alt="" />
            </div>
        </div>
    );
};

export default HeaderBody;