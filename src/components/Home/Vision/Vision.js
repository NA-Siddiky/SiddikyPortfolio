import React from 'react';
import { Chrono } from "react-chrono";

const Vision = () => {
    const items = [{
        title: "15 Jun 2018 – 31 Jan 2019",
        cardTitle: "N2SYS Technology",
        cardSubtitle: "Web developer",
        cardDetailedText: "Writing efficient code, Creating websites/a website using standard HTML/CSS practices. Working closely with web designers and programmers to produce the website.",

    }, {
        title: "Jan 4, 2018 - Nov 13, 2020",
        cardTitle: "Masters in Engineering (M.Sc Engg.)",
        cardSubtitle: "Computer Science and Engineering",
        cardDetailedText: "Pabna University of Science and Technology",

    }, {
        title: "Jan 8, 2012 - Dec 19, 2015",
        cardTitle: "B.Sc in Engineering",
        cardSubtitle: "Computer Science and Engineering",
        cardDetailedText: "Pabna University of Science and Technology",
    }];
    return (
        <div className="d-block m-auto " style={{ width: "500px", height: "650px" }}>
            <Chrono
                items={items}
                mode="VERTICAL_ALTERNATING"
                hideControls
            />
        </div>
    );
};

export default Vision;