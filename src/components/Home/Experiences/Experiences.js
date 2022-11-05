import React from "react";
import { Card } from "react-bootstrap";
import "./Experiences.css";
// import ExperienceBook from './ExperienceBook'

const Experiences = () => {
  return (
    <div className="experiences d-flex flex-wrap my-3 justify-content-center">
      <Card className="shadow experienceHeader">
        <Card.Img
          variant="top"
          src="https://yt3.ggpht.com/ytc/AMLnZu_JuiwUKA8OSoT97avCn9xufJV0LsQFYJkMYdAq=s900-c-k-c0x00ffffff-no-rj"
          className="d-block m-auto experienceInfo p-2"
        />
        <Card.Body className="p-1">
          <Card.Title className="experience-header-title"><h5>Company Name: Programming Hero</h5></Card.Title>
          <Card.Title className="experience-header-title">
            <h6>Full Stack Developer (June 2021 to present)</h6>
          </Card.Title>
          <Card.Text>
            <li>
              Write, review and contributes codes for HR Management software.
            </li>
            <li>Receiving and delivering designs from UI UX designers.</li>
            <li>Designing and developing functioning API's.</li>
            <li>
              Designing the database schema, including the relational model.
            </li>
            <li>
              Features Planning, testing, and implementing improvements on
              assigned features.
            </li>
          </Card.Text>
          {/* <Card.Title>Company Name: British American Tobacco Bangladesh </Card.Title>
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
                    </Card.Text> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Experiences;
