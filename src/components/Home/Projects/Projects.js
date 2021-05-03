import React from 'react';
import { projects } from '../../FakeData'
import Project from './Project';
const Projects = () => {
    return (
        <section id="projects">
            <div className="container">
                <div className="text-center my-4">
                    <h3>Projects</h3>
                    <h5>Lets have a look some of my Projects</h5>
                </div>

                <div className="d-flex justify-content-center flex-wrap">
                    {projects.map(pr => <Project pr={pr} />)}
                </div>
            </div>
        </section>
    );
};

export default Projects;