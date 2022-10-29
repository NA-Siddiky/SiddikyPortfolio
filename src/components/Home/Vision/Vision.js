import React from "react";
import { Chrono } from "react-chrono";
import "./Vision.css";

const Vision = () => {
  const items = [
    {
      title: "Jan 13, 2019 – Aug 31, 2021",
      cardTitle: "BAT Bangladesh",
      cardSubtitle: "MWP-BD Engineer",
      cardDetailedText:
        "● Testing Applications for different versions and features to find and fix bugs. ● Assist on Automation projects ● Create and maintain the BATLeaf Database system (Oracle).● Check & manage BATLeaf web application and its mobile applications accessibility & security.",
    },
    {
      title: "Jun 15, 2018 – Jan 31, 2019",
      cardTitle: "N2SYS Technology",
      cardSubtitle: "Web developer",
      cardDetailedText:
        "● Writing efficient code, ● Creating websites/a website using standard HTML/CSS practices. ● Working closely with web designers and programmers to produce the website.",
    },
    {
      title: "Jan 4, 2018 - Nov 13, 2020",
      cardTitle: "Masters in Engineering (M.Sc Engg.)",
      cardSubtitle: "Computer Science and Engineering",
      cardDetailedText: "Pabna University of Science and Technology",
    },
    {
      title: "Jan 8, 2012 - Dec 19, 2015",
      cardTitle: "B.Sc in Engineering",
      cardSubtitle: "Computer Science and Engineering",
      cardDetailedText: "Pabna University of Science and Technology",
    },
  ];
  return (
    <div className="d-block m-auto chrono-style" style={{}}>
      <Chrono items={items} mode="VERTICAL_ALTERNATING" hideControls />
    </div>
  );
};

export default Vision;
