import React from 'react';
import Typewriter from "typewriter-effect";
import styled from "styled-components";
import { Button } from 'react-bootstrap';


const MyTitleMessage = styled.h2`
  position: absolute;
  width: 100%;
  top: 18rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;
  strong {
    font-size: 1.00em;
  }
  div {
    color: white;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 9px;
    .main {
      font-size: 40px;
    }
    .sub {
      font-size: 30px;
      letter-spacing: 2px;
    }
  }
`;


const HeaderMessage = () => {
    return (
        <MyTitleMessage>
            <div className="titleMessage">
                <div className="heading text-left">
                    <div className="main mb-3">
                        <h1>Hi, I'M <br></br> <span className="color-highlight">N.A Siddiky</span></h1><br />
                        <h4>MERN Developer</h4>
                    </div>
                    <div className="sub">
                        <Typewriter
                            options={{
                                strings: ["React", "Node Js", "MongoDB", "Express JS"],
                                autoStart: true,
                                loop: true,
                                delay: 50
                            }}
                        />
                    </div>
                    <div>
                        <Button className="color-highlight" target="_blank" href="https://drive.google.com/file/d/1MD7KtIoMcxQtXTMzjNUkHx3ow49S_k8_/view?usp=sharing">HIRE ME</Button>
                    </div>
                </div>
            </div>
        </MyTitleMessage>
    );
};

export default HeaderMessage;



