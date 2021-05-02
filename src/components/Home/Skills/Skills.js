import React from 'react';
import './Skills.css'

const Skills = () => {
    return (
        <div className="wrapper container">
            <h2 className="how-title">Development Skills</h2>

            <div className="skill">
                <p>HTML5</p>
                <div className="skill-bar skill1 wow slideInLeft animated">
                    <span className="skill-count1">95%</span>
                </div>
            </div>

            <div className="skill">
                <p>CSS3</p>
                <div className="skill-bar skill2 wow slideInLeft animated">
                    <span className="skill-count2">85%</span>
                </div>
            </div>
            <div class="skill">
                <p>REACT</p>
                <div class="skill-bar skill3 wow slideInLeft animated">
                    <span class="skill-count3">75%</span>
                </div>
            </div>
            <div class="skill">
                <p>JAVASCRIP</p>
                <div class="skill-bar skill4 wow slideInLeft animated">
                    <span class="skill-count4">65%</span>
                </div>
            </div>
            <div class="skill">
                <p>NODE</p>
                <div class="skill-bar skill5 wow slideInLeft animated">
                    <span class="skill-count5">80%</span>
                </div>
            </div>
            <div class="skill">
                <p>WORDPRESS</p>
                <div class="skill-bar skill6 wow slideInLeft animated">
                    <span class="skill-count6">90%</span>
                </div>
            </div>
        </div>
    );
};

export default Skills;