import { FC } from "react";
import Wave from "../Waves/Wave";
import "./Internships.css";
import ImageSlider from "./Slider";
import Brainnest from "../../img/Brainnest.png";
import Sparks from "../../img/sparks.png";
import codevixens from "../../img/codevixens.jpg";
import codeclause from "../../img/codeclause.png";
import prodigy from "../../img/prodigy.png";

const Internships: FC = () => {
  const items = [
    {
      date: "Feb 2024",
      title: "Web Developer Intern",
      Company: "CodeClause",
      img: codeclause,
      desc: "Implemented a timer that counts down to a specified date and time. & Created a tool that allows users to generate visually appealing backgrounds with gradients, include options for color selection, gradient types, and instant preview.",
    },
    {
      date: "Feb 2024",
      title: "React Front End Intern",
      Company: "Prodigy InfoTech",
      img: prodigy,
      desc: "Created stopwatch web application providing functionalities for starting, pausing, and resetting the timer. Additionally, users can track and record lap times. & Made Tic-Tac-Toe App functions to handle user clicks, track game state, and check for winning conditions. & Implemented weather app that fetches weather data from an API based onprovided location and displays the current weather conditions.",
    },
    {
      date: "Feb 2023 – Aug 2023",
      title: "React Front End Intern",
      Company: "Codevixens Academy",
      img: codevixens,
      desc: "Made Simple ToDo list app where user can create, edit and delete projects. & MetaPortal_NFT-Portfolio-and-Landing-Page.",
    },
    {
      date: "Jun 2022 – Jul 2022",
      title: "Frontend Development Intern",
      Company: "Brainnest",
      img: Brainnest,
      desc: "Implemented a calculator with main arithmetic operations. & Rock, Paper and Scissors game aganist computer.",
    },
    {
      date: "Sep 2022 – Oct 2022",
      title: "Web Developement Intern",
      Company: "Sparks Foundation",
      img: Sparks,
      desc: "Wrote frontend code for Banking System.",
    },
  ];
  return (
    <div id="internships">
      <Wave upperFill="#f3c2c6" LowerFill="#7c99c3" />
      <h1 className="disney text-center fs-1">Internships</h1>

      <ImageSlider slides={items} />
    </div>
  );
};

export default Internships;
