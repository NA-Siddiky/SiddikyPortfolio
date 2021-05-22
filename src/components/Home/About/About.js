import React from 'react';
import Resume from '../Resume/Resume';
import profile from '../../../images/Photo 2.jpg'
import './About.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"


const About = () => {
    return (
        <section className="row g-0 w-100 styleOfAbout" id="about">
            <div className="container about-section d-flex flex-wrap">
                <div className="sectionAbout">
                    <h3>About Me</h3>
                </div>

                <div className="col-md-6 about-img">
                    <div>
                        <img className="profileImage border shadow rounded" src={profile} alt="" />
                    </div>

                    <div className='ml-2'>
                        <a style={{ fontSize: '35px', margin: '5px' }} target="_blank" href={"https://github.com/NA-Siddiky"}>
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a style={{ fontSize: '35px', margin: '5px' }} target="_blank" href={"https://www.linkedin.com/in/na-siddiky/"}> <FontAwesomeIcon icon={faLinkedin} /></a>
                    </div>

                </div>

                <div className="col-md-6 about-info">
                    <p><span>By conjoining hard work and hope you will get my name that is <strong>Siddiky</strong>.</span> I’m a <strong>MERN</strong> Stack developer and desirous to
develop in a challenging workplace that welcomes innovative ideas and offers growth opportunities and a positive
environment as a leader or team member.</p>

                    <p>It’s my passion to work on real-time web applications using JavaScript (ES6,
React, Next) & Node.js is really awesome backend technology that I always prefer.</p>
                    <Resume></Resume>
                </div>
            </div>
        </section >
    );
};
export default About;