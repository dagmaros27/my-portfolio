import { Col, Row } from "antd";
import ProjectCard from "./ProjectCard";
import ScrollAnimation from "react-animate-on-scroll"; // Add this for animations

const layoutStyle = {
  minHeight: "80vh",
  padding: "2rem",
};

const Projects = () => {
  return (
    <div style={layoutStyle} id="projects">
      <h1 style={{ color: "#7127ba", textAlign: "center" }}>Projects</h1>
      <Row
        gutter={[12, 24]} // Adds space between columns
        justify="center"
        style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}
      >
        {[...Array(6)].map((_, index) => (
          <Col key={index} xs={24} sm={24} md={12} lg={6} xl={6}>
            <ScrollAnimation
              animateIn="fadeInUp"
              duration={1.5}
              animateOnce={true}
            >
              <ProjectCard />
            </ScrollAnimation>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Projects;
