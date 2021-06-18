import React from 'react';
import { Card } from 'react-bootstrap';
import './Experiences.css'
// import ExperienceBook from './ExperienceBook'

const Experiences = () => {
    return (
        <div className="experiences d-flex flex-wrap my-3 justify-content-center">
            <Card className="shadow experienceHeader">
                <Card.Img variant="top" src="https://i.pinimg.com/originals/01/f2/b3/01f2b3832a5d53716dfa35d72ca30ce8.png" className='d-block m-auto experienceInfo' />
                <Card.Body>
                    <Card.Title>Company Name: British American Tobacco Bangladesh </Card.Title>
                    <Card.Title>Jan 13, 2019 to present</Card.Title>
                    <Card.Text>
                        <li>
                            Testing Applications for different versions and features to find and fix bugs over there.
                        </li>
                        <li>
                            Create and manage website templates for multiple teams and groups using Microsoft SharePoint.
                        </li>
                        <li>
                            Create and Maintain the BATLeaf Database system (Oracle).
                        </li>
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>

    );
};

export default Experiences;