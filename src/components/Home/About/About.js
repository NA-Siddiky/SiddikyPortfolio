import React from 'react';
import Resume from '../Resume/Resume';
import profile from '../../../images/siddiky.png'
import './About.css'

const About = () => {
    return (
        <div className="row styleOfAbout">
            <div className="col-md-8">
                <h1>Hello, I'M <br></br> <span className="name-highlight"></span>N.A Siddiky</h1>
                <h3>A Full stack Web Developer</h3>
                <p>Software engineer with professional experience in web development and information security system.</p>

                <Resume></Resume>
            </div>
            <div className="col-md-4">
                <img className="profileImage" src={profile} alt="" />
            </div>
        </div>
    );
};

export default About;