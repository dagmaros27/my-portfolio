import { Col, Row } from "antd";
import {
  RiReactjsFill,
  RiJavascriptFill,
  RiHtml5Fill,
  RiCss3Fill,
  RiFlutterFill,
} from "react-icons/ri";
import {
  SiExpress,
  SiMongodb,
  SiDotnet,
  SiMysql,
  SiPostman,
} from "react-icons/si";
import { FaFigma, FaGitAlt, FaGithub, FaNode, FaPython } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { BiLogoVisualStudio } from "react-icons/bi";
import "./skills.css";
import ScrollAnimation from "react-animate-on-scroll";

const iconSize = 72;
const programmingLanguages = [
  {
    name: "HTML",
    icon: <RiHtml5Fill size={iconSize} />,
  },
  {
    name: "CSS",
    icon: <RiCss3Fill size={iconSize} />,
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptFill size={iconSize} />,
  },
  {
    name: "React Js",
    icon: <RiReactjsFill size={iconSize} />,
  },
  {
    name: "Express Js",
    icon: <SiExpress size={iconSize} />,
  },
  {
    name: "Node Js",
    icon: <FaNode size={iconSize} />,
  },
  {
    name: "Python",
    icon: <FaPython size={iconSize} />,
  },
  {
    name: "MySQL",
    icon: <SiMysql size={iconSize} />,
  },
  {
    name: "Mongo Db",
    icon: <SiMongodb size={iconSize} />,
  },
  {
    name: ".Net",
    icon: <SiDotnet size={iconSize} />,
  },
  {
    name: "Go",
    icon: <FaGolang size={iconSize} />,
  },
  {
    name: "Flutter",
    icon: <RiFlutterFill size={iconSize} />,
  },
];

const tools = [
  {
    name: "Vs Code",
    icon: <BiLogoVisualStudio size={iconSize} />,
  },
  {
    name: "Postman",
    icon: <SiPostman size={iconSize} />,
  },
  {
    name: "Git",
    icon: <FaGitAlt size={iconSize} />,
  },
  {
    name: "Github",
    icon: <FaGithub size={iconSize} />,
  },
  {
    name: "Figma",
    icon: <FaFigma size={iconSize} />,
  },
];

const Skills = () => {
  return (
    <div>
      <h1 style={{ color: "#7127ba" }}>Professional Skillset</h1>
      <ScrollAnimation animateIn="fadeInUp" duration={1.5} animateOnce={true}>
        <Row
          style={{
            marginBottom: "2rem",
            display: "flex",
          }}
        >
          {programmingLanguages.map((skill, index) => {
            const key = `col-${index}`;
            return (
              <Col
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "1rem",
                  margin: "1rem",
                  border: "1px solid #7127ba",
                  backgroundColor: "#11071F",
                }}
                key={key}
                flex={"40%"}
                className="card"
              >
                <div className="icon">{skill.icon}</div>
                <span>
                  {" "}
                  <strong style={{ fontSize: "1rem", color: "#7127ba" }}>
                    {skill.name}
                  </strong>
                </span>
              </Col>
            );
          })}
        </Row>
      </ScrollAnimation>

      <h2> Tools I use</h2>
      <ScrollAnimation animateIn="fadeInUp" duration={1.5} animateOnce={true}>
        <Row
          style={{
            marginBottom: "2rem",
            display: "flex",
          }}
        >
          {tools.map((skill, index) => {
            const key = `col-${index}`;
            return (
              <Col
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "1rem",
                  margin: "1rem",
                  border: "1px solid #7127ba",
                  backgroundColor: "#11071F",
                }}
                span={12}
                key={key}
                className="card"
              >
                <div className="icon">{skill.icon}</div>
                <span>
                  {" "}
                  <strong style={{ fontSize: "1rem", color: "#7127ba" }}>
                    {skill.name}
                  </strong>
                </span>
              </Col>
            );
          })}
        </Row>
      </ScrollAnimation>
    </div>
  );
};

export default Skills;
