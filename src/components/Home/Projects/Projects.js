import React from 'react';
import { Carousel } from 'react-bootstrap';

import project1 from '../../../images/Project1.PNG'
import project2 from '../../../images/Project2.PNG'
import project3 from '../../../images/Project3.PNG'

const Projects = () => {
    return (
        <div className="container">
            <div className="text-align-center">
                <h3>Projects</h3>
                <h5>Lets have a look some of my Projects</h5>
            </div>

            <div className="w-75 -block m-auto">
                <Carousel>
                    <Carousel.Item>
                        <img style={{height:'300px', borderRadius:'10px'}}
                            className="d-block w-100"
                            src={project1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{height:'300px', borderRadius:'10px'}}
                            className="d-block w-100"
                            src={project2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{height:'300px', borderRadius:'10px'}}
                            className="d-block w-100"
                            src={project3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>



    );
};

export default Projects;