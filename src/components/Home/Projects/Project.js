import React from 'react'
import { Button, Card } from 'react-bootstrap'

function Project({ pr }) {
  const { name, img, teach, link, github, desc } = pr;
  return (
    <div className="col-md-4 p-3">
      <Card className='shadow rounded'>
        <Card.Img variant="top" height="200px" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Title>{teach}</Card.Title>
          <Card.Text>
            {desc.substring(0, 250)}
          </Card.Text>
          <div className='d-flex justify-content-between'>
            <Button target='_blank' className="btn-custom" href={link}>Visit Site</Button>
            <Button target='_blank' className="btn-custom" href={github}>View Code</Button>
          </div>

        </Card.Body>
      </Card>
    </div>
  )
}

export default Project
