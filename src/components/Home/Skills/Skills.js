import React, { useState } from 'react';
import SkillDetails from './SkillDetails';
import './Skills.css'

const mySkills = [
    {
        done: '87',
        technologyName: 'React'
    },
    {
        done: '87',
        technologyName: 'React'
    },
    {
        done: '87',
        technologyName: 'React'
    },
    {
        done: '87',
        technologyName: 'React'
    },
    {
        done: '87',
        technologyName: 'React'
    },
]

const Skills = () => {

    return (
        <section className="w-100 container">

            <h1 className="text-center section-heading">My Skills</h1>
            <div className="d-flex justify-content-center align-items-center">
                <div className="w-50">
                    {
                        mySkills.map(skill => <SkillDetails done={skill.done} technologyName={skill.technologyName} ></SkillDetails>)
                    }
                </div>
            </div>
        </section>

    );
};

export default Skills;