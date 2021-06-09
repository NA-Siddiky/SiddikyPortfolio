import React from 'react';
import SkillDetails from './SkillDetails';
import './Skills.css'

const mySkills = [
    {
        done: '90',
        technologyName: 'HTML'
    },
    {
        done: '80',
        technologyName: 'CSS'
    },
    {
        done: '95',
        technologyName: 'REACT'
    },
    {
        done: '85',
        technologyName: 'REACT NATIVE'
    },
    {
        done: '60',
        technologyName: 'TYPESCRIPT'
    },
    {
        done: '90',
        technologyName: 'REDUX'
    },
    {
        done: '80',
        technologyName: 'NODE'
    },
    {
        done: '90',
        technologyName: 'EXPRESS'
    },
    {
        done: '85',
        technologyName: 'MONGO DB'
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