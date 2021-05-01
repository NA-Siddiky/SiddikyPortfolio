import React from 'react';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header/Header';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Experiences from '../Experiences/Experiences';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Vision from '../Vision/Vision';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Skills></Skills>
            <Projects></Projects>
            <Experiences></Experiences>
            <Vision></Vision>
            <Blog></Blog>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;