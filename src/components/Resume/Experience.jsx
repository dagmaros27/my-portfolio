import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ExperienceCard from "./ExperienceCard";
import { FaBriefcase } from "react-icons/fa";
import "./experience.css"; // Custom styles if needed

const Experience = () => {
  // Example experience data
  const experiences = [
    {
      id: 1,
      title: "AfroMina Solutions",
      position: "Frontend Developer Intern",
      date: "Jul, 2023 - Sep, 2023",
      details: [
        "Collaborated with a dynamic team to develop a cutting-edge web application using React and Material UI.",
        "Contributed 10+ reusable UI components to the creation of a user-friendly and visually appealing interface.",
      ],
    },
    {
      id: 2,
      title: "Another Company",
      position: "Backend Developer",
      date: "Jan, 2022 - Dec, 2022",
      details: [
        "Developed and maintained server-side logic using Node.js and Express.",
        "Implemented RESTful APIs and integrated them with front-end components.",
      ],
    },
    // Add more experiences as needed
  ];

  return (
    <div id="resume">
      <h1 style={{ color: "#7127ba", textAlign: "center" }}>Resume</h1>
      <VerticalTimeline>
        {experiences.map((experience) => (
          <VerticalTimelineElement
            key={experience.id}
            contentStyle={{ background: "#11071F", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #7127ba" }}
            date={experience.date}
            iconStyle={{ background: "#7127ba", color: "#fff" }}
            icon={<FaBriefcase />}
          >
            <ExperienceCard experience={experience} />
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
