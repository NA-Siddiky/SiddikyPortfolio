import React from 'react';
import { Card } from 'react-bootstrap';
import './Experiences.css'
const Experiences = () => {
    return (
        <div className="experiences d-flex my-3 justify-content-center">
            <Card style={{ width: '600px', marginBottom: '-50px', height: '450px', marginTop: '50px' }} className="shadow">
                <Card.Img variant="top" src="https://th.bing.com/th/id/R992e6a8404668607cf528b366a7e6487?rik=ILz3wkd%2fkyrE%2fQ&pid=ImgRaw" style={{ height: '200px', width: '200px', borderRadius: '50%' }} className='d-block m-auto' />
                <Card.Body>
                    <Card.Title>British American Tobacco</Card.Title>
                    <Card.Title>Jan 13, 2019 to present</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus numquam quam libero delectus itaque eos impedit molestiae nostrum. Ab aut beatae qui rerum similique suscipit culpa esse omnis. Odit, dolores.
                    </Card.Text>

                </Card.Body>
            </Card>
        </div>
    );
};

export default Experiences;