import React from 'react';
import { Carousel } from 'react-bootstrap';

import project1 from '../../../images/Project1.PNG'
import project2 from '../../../images/Project2.PNG'
import project3 from '../../../images/Project3.PNG'
import { projects } from '../../FakeData'
import Project from './Project';
const Projects = () => {
    return (
        <div className="container">
            <div className="text-center my-4">
                <h3>Projects</h3>
                <h5>Lets have a look some of my Projects</h5>
            </div>

            <div className="d-flex justify-content-center flex-wrap">
                {projects.map(pr => <Project pr={pr} />)}
            </div>
        </div>



    );
};

export default Projects;