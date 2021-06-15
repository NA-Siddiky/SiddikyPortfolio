import React from 'react';
import HTMLFlipBook from "react-pageflip";
import webDevelopment from "../../../images/Certificate/Web Development.jpg"
import python from "../../../images/Certificate/Python.jpg"
import git from "../../../images/Certificate/Git.jpg"
import command from "../../../images/Certificate/Command Line Linux.jpg"
import lict from "../../../images/Certificate/LICT-1.jpg"
import workshop from "../../../images/Certificate/Workshop.jpg"
import BSC from "../../../images/Certificate/B.Sc Certificate.jpg"
import BCS from "../../../images/Certificate/BCS Certificate.jpg"
import ielts from "../../../images/Certificate/IELTS_Certificate-1.jpg"


const ExperienceBook = () => {
    return (
        <section className="p-3">

            <h1 className="text-center my-5 section-heading">MY CERTIFICATES</h1>

            <div className="flex justify-center">

                <HTMLFlipBook width={400} height={500} className="flipBook">
                    <div className="bg-blue-400 shadow-md h-100 d-flex align-items-center text-center justify-content-center flip-book-text">
                        <h2>Welcome to my <br />Certificate Album</h2>
                    </div>
                    <div className="bg-blue-400 shadow-md flip-book-img-container">
                        <img className="p-2" src={webDevelopment} alt="" />
                        <a href="https://www.coursera.org/account/accomplishments/certificate/5MZCK4U5YJJZ" target="_blank" className="flip-book-overlay">See Credentials</a>
                    </div>
                    <div className="bg-blue-200 shadow-md flip-book-img-container">
                        <img className="p-2" src={python} alt="" />
                        <a href="https://www.coursera.org/account/accomplishments/certificate/GM63CYXYW9GQ" target="_blank" className="flip-book-overlay">See Credentials</a>
                    </div>
                    <div className="bg-blue-300 shadow-md flip-book-img-container">
                        <img className="p-2" src={git} alt="" />
                        <a href="#" target="_blank" className="flip-book-overlay">See Credentials</a>
                    </div>
                    <div className="bg-blue-200 shadow-md flip-book-img-container">
                        <img className="p-2" src={command} alt="" />
                        <a href="#" target="_blank" className="flip-book-overlay">See Credentials</a>
                    </div>
                    <div className="bg-blue-500 shadow-md flip-book-img-container">
                        <img className="p-2" src={lict} alt="" />
                        <a href="#" target="_blank" className="flip-book-overlay">See Credentials</a>
                    </div>
                    <div className="bg-blue-200 shadow-md flip-book-img-container">
                        <img className="p-2" src={workshop} alt="" />
                        <a href="#" target="_blank" className="flip-book-overlay">See Credentials</a>
                    </div>
                    <div className="bg-blue-300 shadow-md flip-book-img-container">
                        <img className="p-2" src={BSC} alt="" />
                        <a href="#" target="_blank" className="flip-book-overlay">See Credentials</a>
                    </div>
                    <div className="bg-blue-200 shadow-md flip-book-img-container">
                        <img className="p-2" src={BCS} alt="" />
                        <a href="#" target="_blank" className="flip-book-overlay">See Credentials</a>
                    </div>
                    <div className="bg-blue-500 shadow-md flip-book-img-container">
                        <img className="p-2" src={ielts} alt="" />
                        <a href="#" target="_blank" className="flip-book-overlay">See Credentials</a>
                    </div>
                    <div className="bg-blue-500 shadow-md flip-book-img-container h-100 d-flex align-items-center text-center justify-content-center flip-book-text">
                        <h2>Thank You</h2>
                    </div>

                </HTMLFlipBook>


            </div>
        </section>
    );
};

export default ExperienceBook;