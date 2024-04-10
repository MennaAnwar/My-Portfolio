import { FC } from "react";
import Girl from "../GIRL/Girl";
import "./About.css";
import SwingingGirl from "../SwingingGirl/SwingingGirl";

const About: FC = () => {
  const tech = [
    "JavaScript",
    "TypeScript",
    "MySQL",
    "ReactJs",
    "PHP  Laravel",
    "GSAP",
    "RESTful APIs",
  ];

  return (
    <div id="about">
      <div
        id="intro"
        className="row text-center justify-content-center align-items-center px-2"
      >
        <div className="col-sm-12 col-md-12 col-lg-6">
          <Girl />
        </div>
        <div id="me" className="col-sm-12 col-md-12 col-lg-6">
          <h1 className="disney">Hello !!</h1>
          <h2 className="disney">Iam Menna Mohamed Anwar</h2>
          <p className="reg fs-5">
            A web developer skilled in React.js and Laravel, focusing on
            developing responsive web applications. Committed to high-quality,
            maintainable code and continuous learning to solve complex
            challenges, ensuring optimal performance and user satisfaction.
          </p>
        </div>
      </div>
      <div
        id="skills"
        className="row justify-content-center align-items-center px-2"
      >
        <div className="col-sm-12 col-md-12 col-lg-6">
          <p className="reg fs-4">Some Technologies I have used recently:</p>
          <ul className="skills-list justify-content-center reg">
            {tech.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6">
          <SwingingGirl />
        </div>
      </div>
    </div>
  );
};
export default About;
