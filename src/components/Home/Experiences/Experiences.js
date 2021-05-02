import React from 'react';
import { Card } from 'react-bootstrap';
import './Experiences.css'
const Experiences = () => {
    return (
        <div className="experiences d-flex my-3 justify-content-center">
            <Card style={{ width: '600px', marginBottom: '-50px', height: '450px', marginTop: '50px' }} className="shadow">
                <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/67842629?v=4" style={{ height: '200px', width: '200px', borderRadius: '50%' }} className='d-block m-auto' />
                <Card.Body>
                    <Card.Title>Company Name</Card.Title>
                    <Card.Title>Apr 2019 to present</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus numquam quam libero delectus itaque eos impedit molestiae nostrum. Ab aut beatae qui rerum similique suscipit culpa esse omnis. Odit, dolores.
                    </Card.Text>

                </Card.Body>
            </Card>
        </div>
    );
};

export default Experiences;