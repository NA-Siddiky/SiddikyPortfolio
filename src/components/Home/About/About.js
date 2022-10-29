import React from "react";
import profile from "../../../images/Photo 2.jpg";
import "./About.css";

const About = () => {
  return (
    <section className="w-100 p-5 styleOfAbout" id="about">
      <div className="container mt-5 about-section d-flex flex-wrap">
        <div className="sectionAbout"></div>

        <div className="row aboutBox p-4">
          <div className="col-md-5 about-img d-flex justify-content-center">
            <div className="about-img-border">
              <img className="profileImage" src={profile} alt="" />
            </div>
          </div>

          <div className="col-md-7 about-info text-justify">
            <h1 className="section-heading my-3">About Me</h1>
            <h4>FULL STACK DEVELOPER</h4>

            <p>
              <span>
                By conjoining hard work and hope you will get the name{" "}
                <strong>"Siddiky"</strong>.
              </span>{" "}
              I would like to grow professionally in an organization that values
              innovative ideas, offers growth opportunities in a positive work
              environment as a leader or team member.
            </p>

            <p>
              Competitive programming and problem-solving are the things that I
              love most. It is my passion to create real-time applications using
              JavaScript, <strong>React</strong>, and Redux including the
              backend technology
              <strong> node.js</strong>, express.js. And I always prefer{" "}
              sequelize or Prisma for ORMs since I am comfortable working with
              both <strong>MySQL</strong> and <strong>MongoDB</strong> in
              projects.
            </p>
            <a className="btn btn-custom" href="#contact">
              HIRE ME
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
