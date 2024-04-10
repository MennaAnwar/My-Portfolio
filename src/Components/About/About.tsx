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
        <div
          id="me"
          className="col-sm-12 col-md-12 col-lg-6 d-flex flex-column"
        >
          <h1 className="disney">Hello !!</h1>
          <h2 className="disney">Iam Menna Mohamed Anwar</h2>
          <p className="reg fs-5">
            A web developer skilled in React.js and Laravel, focusing on
            developing responsive web applications. Committed to high-quality,
            maintainable code and continuous learning to solve complex
            challenges, ensuring optimal performance and user satisfaction.
          </p>
          <a className="Btn fourth" href="https://flowcv.com/resume/vpm51f5via">
            Download My Resume
          </a>
        </div>
      </div>
      <svg
        className="anim-line"
        viewBox="468.5 157.5 243 25"
        width="243"
        height="25"
      >
        <g>
          <path d=" M 500 170 Q 516.667 189.333 530 170 Q 543.333 150.667 560 170 Q 576.667 192 590 170 Q 603.333 148 620 170 Q 640 190.667 650 170 Q 660 149.333 680 170 Q 699.333 192 710 170"></path>
        </g>
      </svg>
      <div
        id="skills"
        className="row justify-content-center align-items-center px-2"
      >
        <div className="col-sm-12 col-md-12 col-lg-6">
          <p className="reg fs-4">Some Technologies I have used recently:</p>
          <ul className="skills-list justify-content-center reg fs-5">
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
