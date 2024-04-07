import { FC } from "react";
import Wave from "../Waves/Wave";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "./Internships.css";

const Internships: FC = () => {
  const items = [
    {
      date: "Feb 2024",
      title: "Web Developer Intern",
      company: "CodeClause",
    },
    {
      date: "Feb 2024",
      title: "React Front End Intern",
      company: "Prodigy InfoTech",
    },
    {
      date: "Feb 2023 – Aug 2023",
      title: "React Front End Intern",
      company: "Codevixens Academy",
    },
    {
      date: "Jun 2022 – Jul 2022",
      title: "Frontend Development Intern",
      company: "Brainnest",
    },
    {
      date: "Sep 2022 – Oct 2022",
      title: "Web Developement Intern",
      company: "Sparks Foundation",
    },
  ];
  return (
    <div id="internships">
      <Wave upperFill="#f3c2c6" LowerFill="#7c99c3" />
      <h1 className="disney text-center fs-1">Internships</h1>
      <VerticalTimeline>
        {items.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            iconStyle={{
              background: "#7c99c3",
              color: "#fff",
            }}
          >
            <h5 className="vertical-timeline-element-title">{item.title}</h5>
            <h6 className="vertical-timeline-element-subtitle">
              {item.company}
            </h6>
          </VerticalTimelineElement>
        ))}

        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Internships;
