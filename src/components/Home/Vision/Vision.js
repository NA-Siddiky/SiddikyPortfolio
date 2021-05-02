import React from 'react';
import { Chrono } from "react-chrono";

const Vision = () => {
    const items = [{
        title: "May 1940",
        cardTitle: "Dunkirk",
        cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",

    }, {
        title: "May 1940",
        cardTitle: "Dunkirk",
        cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",

    }, {
        title: "May 1940",
        cardTitle: "Dunkirk",
        cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",

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