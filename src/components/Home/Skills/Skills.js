import React, { useEffect, useState } from "react";
import "./Skills.css";

import bootstrap from "../../../images/skill_ico/bootstrap.png";
import coreui from "../../../images/skill_ico/coreui.png";
import css from "../../../images/skill_ico/css.png";
import expo from "../../../images/skill_ico/expo.png";
import html from "../../../images/skill_ico/html.png";
import js from "../../../images/skill_ico/js.png";
import mantine from "../../../images/skill_ico/mantine.png";
import native from "../../../images/skill_ico/native.png";
import react from "../../../images/skill_ico/react.png";
import redux from "../../../images/skill_ico/redux.png";
import sass from "../../../images/skill_ico/sass.png";
import tailwindcss from "../../../images/skill_ico/tailwindcss.png";

import axios from "../../../images/skill_ico/axios.png";
import express from "../../../images/skill_ico/express.png";
import handlebarsjs from "../../../images/skill_ico/handlebarsjs.png";
import mongodb from "../../../images/skill_ico/mongo.png";
import mysql from "../../../images/skill_ico/mysql.png";
import node from "../../../images/skill_ico/node.png";
import prisma from "../../../images/skill_ico/Prisma.png";
import restapi from "../../../images/skill_ico/restapi.png";
import sequelize from "../../../images/skill_ico/sequelize.png";
import solidity from "../../../images/skill_ico/solidity.png";

import amazon from "../../../images/skill_ico/amazon-s3.png";
import digitalOcean from "../../../images/skill_ico/DigitalOcean.png";
import docker from "../../../images/skill_ico/docker.png";
import firebase from "../../../images/skill_ico/firebase.png";
import git from "../../../images/skill_ico/git.png";
import github from "../../../images/skill_ico/github.png";
import heroku from "../../../images/skill_ico/heroku.png";
import netlify from "../../../images/skill_ico/netlify.png";
import oracleCloud from "../../../images/skill_ico/oraclecloud.png";
import postman from "../../../images/skill_ico/postman.png";

const mySkills = [
  //-------FRONTEND TECHNOLOGY------//
  {
    id: 1,
    done: "95",
    technologyName: "HTML",
    technologyLogo: html,
    category: "frontEnd",
  },
  {
    id: 2,
    done: "90",
    technologyName: "CSS",
    technologyLogo: css,
    category: "frontEnd",
  },
  {
    id: 3,
    done: "97",
    technologyName: "JS",
    technologyLogo: js,
    category: "frontEnd",
  },
  {
    id: 4,
    done: "95",
    technologyName: "REACT",
    technologyLogo: react,
    category: "frontEnd",
  },
  {
    id: 5,
    done: "90",
    technologyName: "REDUX",
    technologyLogo: redux,
    category: "frontEnd",
  },
  {
    id: 6,
    done: "80",
    technologyName: "SASS",
    technologyLogo: sass,
    category: "frontEnd",
  },
  {
    id: 7,
    done: "90",
    technologyName: "BOOTSTRAP",
    technologyLogo: bootstrap,
    category: "frontEnd",
  },
  {
    id: 8,
    done: "75",
    technologyName: "TAILWIND",
    technologyLogo: tailwindcss,
    category: "frontEnd",
  },
  {
    id: 9,
    done: "75",
    technologyName: "MANTINE",
    technologyLogo: mantine,
    category: "frontEnd",
  },
  {
    id: 10,
    done: "75",
    technologyName: "COREUI",
    technologyLogo: coreui,
    category: "frontEnd",
  },
  {
    id: 11,
    done: "70",
    technologyName: "REACT NATIVE",
    technologyLogo: native,
    category: "frontEnd",
  },
  {
    id: 12,
    done: "80",
    technologyName: "EXPO",
    technologyLogo: expo,
    category: "frontEnd",
  },
  //-------FRONTEND TECHNOLOGY------//

  //--------BACKEND TECHNOLOGY-------//
  {
    id: 13,
    done: "80",
    technologyName: "NODE",
    technologyLogo: node,
    category: "backEnd",
  },
  {
    id: 14,
    done: "95",
    technologyName: "EXPRESS",
    technologyLogo: express,
    category: "backEnd",
  },
  {
    id: 15,
    done: "90",
    technologyName: "MONGO DB",
    technologyLogo: mongodb,
    category: "backEnd",
  },
  {
    id: 16,
    done: "90",
    technologyName: "AXIOS",
    technologyLogo: axios,
    category: "backEnd",
  },
  {
    id: 17,
    done: "90",
    technologyName: "REST API",
    technologyLogo: restapi,
    category: "backEnd",
  },
  {
    id: 18,
    done: "90",
    technologyName: "MYSQL",
    technologyLogo: mysql,
    category: "backEnd",
  },
  {
    id: 19,
    done: "90",
    technologyName: "SEQUELIZE",
    technologyLogo: sequelize,
    category: "backEnd",
  },
  {
    id: 20,
    done: "80",
    technologyName: "PRISMA",
    technologyLogo: prisma,
    category: "backEnd",
  },
  {
    id: 21,
    done: "80",
    technologyName: "HANDLEBARS",
    technologyLogo: handlebarsjs,
    category: "backEnd",
  },

  {
    id: 22,
    done: "90",
    technologyName: "solidity",
    technologyLogo: solidity,
    category: "backEnd",
  },

  //--------BACKEND TECHNOLOGY-------//
  //--------TECHNOLOGY FOR TOOLS-------//
  {
    id: 23,
    done: "95",
    technologyName: "GIT",
    technologyLogo: git,
    category: "tools",
  },
  {
    id: 24,
    done: "90",
    technologyName: "GITHUB",
    technologyLogo: github,
    category: "tools",
  },
  {
    id: 25,
    done: "95",
    technologyName: "POSTMAN",
    technologyLogo: postman,
    category: "tools",
  },
  {
    id: 26,
    done: "95",
    technologyName: "DOCKER",
    technologyLogo: docker,
    category: "tools",
  },
  {
    id: 27,
    done: "95",
    technologyName: "ORACLE CLOUD",
    technologyLogo: oracleCloud,
    category: "tools",
  },
  {
    id: 28,
    done: "95",
    technologyName: "DIGITAL OCEAN",
    technologyLogo: digitalOcean,
    category: "tools",
  },
  {
    id: 29,
    done: "95",
    technologyName: "AMAZON",
    technologyLogo: amazon,
    category: "tools",
  },
  {
    id: 30,
    done: "85",
    technologyName: "FIREBASE",
    technologyLogo: firebase,
    category: "tools",
  },
  {
    id: 31,
    done: "80",
    technologyName: "NETLIFY",
    technologyLogo: netlify,
    category: "tools",
  },
  {
    id: 32,
    done: "95",
    technologyName: "HEROKU",
    technologyLogo: heroku,
    category: "tools",
  },
  //--------TECHNOLOGY FOR TOOLS-------//
];

const Skills = () => {
  const [getSkill, setGetSkill] = useState([]);

  useEffect(() => {
    const specificSkill = mySkills.filter(
      (skill) => skill.category === "frontEnd"
    );
    setGetSkill(specificSkill);
  }, []);

  const onFilterCategory = (category) => {
    const filterByCategory = mySkills.filter(
      (skill) => skill.category === category
    );
    setGetSkill(filterByCategory);
    console.log(filterByCategory);
    console.log(category);
  };

  return (
    <section className="w-100 container">
      <h1 className="text-center section-heading my-5">My Skills</h1>
      <nav>
        <div
          class="nav nav-tabs d-flex justify-content-center align-items-center"
          id="nav-tab"
          role="tablist"
        >
          <button
            class="nav-link active"
            id="nav-home-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-home"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
            onClick={() => onFilterCategory("frontEnd")}
          >
            Front-End
          </button>

          <button
            class="nav-link"
            id="nav-profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-profile"
            type="button"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
            onClick={() => onFilterCategory("backEnd")}
          >
            Back-End
          </button>

          <button
            class="nav-link"
            id="nav-contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-contact"
            type="button"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
            onClick={() => onFilterCategory("tools")}
          >
            Tools
          </button>
        </div>
      </nav>

      <div
        class="tab-content d-flex justify-content-center flex-wrap"
        id="nav-tabContent"
      >
        {getSkill.map((skill) => (
          <div
            class="tab-pane fade show active skill-item-container"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <div className="skill-item d-flex justify-content-center align-items-center m-4 p-4">
              <img src={skill.technologyLogo} alt="" />
            </div>
          </div>
        ))}
      </div>

      {/* Progress Bar  */}
      {/* <div className="d-flex justify-content-center align-items-center">
                <div className="w-50">
                    {
                        getSkill.map(skill => <SkillDetails done={skill.done} technologyName={skill.technologyName} ></SkillDetails>)
                    }
                </div>
            </div> */}
    </section>
  );
};

export default Skills;
