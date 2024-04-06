import { FC } from "react";
import Girl from "../GIRL/Girl";
import "./About.css";
import Wave from "../Waves/Wave";

const About: FC = () => {
  return (
    <div id="about">
      <Wave upperFill="#2c3e50" LowerFill="#d8b2e1" />
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
          <p className="reg fs-4">
            A web developer skilled in React.js and Laravel, focusing on
            developing responsive web applications. Committed to high-quality,
            maintainable code and continuous learning to solve complex
            challenges, ensuring optimal performance and user satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
