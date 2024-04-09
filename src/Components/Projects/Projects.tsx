import { FC, useContext } from "react";
import { Link } from "react-router-dom";
import Wave from "../Waves/Wave";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import CursorContext from "../../Context";
import "./Projects.css";

const Projects: FC = () => {
  const cursor = useContext(CursorContext);

  const handleMouseEnter = () => {
    document.getElementById("c")?.classList.add("view");
  };

  const handleMouseLeave = () => {
    document.getElementById("c")?.classList.remove("view");
  };

  const featuredProjects = [
    {
      title: "Robot Controlling Dashboard",
      tech: "ReactJs Laravel",
      desc: "Developed a web-based dashboard for real-time control of robotic systems. & Coordinated with the embedded team to ensure seamless integration and data flow between the Dashboard, and ROS scripts.",
      link: "https://github.com/MennaAnwar/Dashboard",
    },
    {
      title: "Music Platform WebApp",
      tech: "ReactJs Laravel",
      desc: "Developed a music platform that provides open-source music APIs for streaming and integrates robust user authentication.",
      link: "https://github.com/MennaAnwar/Music-Platform",
    },
  ];

  return (
    <div id="projects">
      <Wave upperFill="#7c99c3" LowerFill="#e96f8c" />
      <h1 className="disney text-center fs-1">Featured Projects</h1>
      <VerticalTimeline>
        {featuredProjects.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work text-start project"
            iconStyle={{
              background: "#7c99c3",
              color: "#fff",
            }}
          >
            <a
              href={item.link}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {item.tech.split(" ").map((tech, index) => (
                <span
                  key={`badge` + index}
                  className="badge rounded-pill bg-primary px-2 py-1 me-2 bg-secondary"
                >
                  {tech}
                </span>
              ))}
              <h5 className="vertical-timeline-element-title">{item.title}</h5>
              <ul>
                {item.desc.split("&").map((desc, index) => (
                  <li key={`desc` + index}>{desc}</li>
                ))}
              </ul>
            </a>
          </VerticalTimelineElement>
        ))}

        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Projects;
