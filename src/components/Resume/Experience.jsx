import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ExperienceCard from "./ExperienceCard";
import { FaBriefcase } from "react-icons/fa";
import "./experience.css";

const Experience = () => {
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
      title: "ICog Labs",
      position: "AGI Intern",
      date: "Jun, 2024 - Aug, 2024",
      details: [
        "Developed and worked on knowledge graphs using Metta/Hyperon, gaining practical expertise in advanced AI techniques",
        "Conducted extensive research by reading multiple papers, summarizing articles, and completing various courses on AI and modern software development",
      ],
    },
    {
      id: 3,
      title: "Africa to Silicon Valley (A2SV)",
      position: "Student and Backend Trainee",
      date: "Nov, 2023 - Present",
      details: [
        "Joined a tech academy supported by Google, focused on empowering top university students to tackle Africa’s most pressing challenges and connecting them with opportunities at leading global tech firms",
        "Completed intensive training in advanced algorithms, data structures, and back-end software development",
        "Participated in coding sessions, and hackathons strengthening teamwork and collaboration abilities",
      ],
    },
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
