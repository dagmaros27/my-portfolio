import { Col, Row } from "antd";
import ProjectCard from "./ProjectCard";
import ScrollAnimation from "react-animate-on-scroll";
import myprojects from "./projectData";

const layoutStyle = {
  minHeight: "80vh",
  padding: "2rem",
};

const Projects = () => {
  return (
    <div style={layoutStyle} id="projects">
      <h1 style={{ color: "#7127ba", textAlign: "center" }}>Projects</h1>
      <Row
        gutter={[12, 24]}
        justify="center"
        style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}
      >
        {myprojects.map((project, index) => (
          <Col key={index} xs={24} sm={24} md={12} lg={6} xl={6}>
            <ScrollAnimation
              animateIn="fadeInUp"
              duration={1.5}
              animateOnce={true}
            >
              <ProjectCard project={project} />
            </ScrollAnimation>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Projects;
