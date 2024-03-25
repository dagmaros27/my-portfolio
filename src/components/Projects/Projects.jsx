import { Col, Row } from "antd";
import React from "react";
import ProjectCard from "./ProjectCard";
const layoutStyle = {
  "min-height": "80vh",
  padding: "2rem",
};

const Projects = () => {
  return (
    <div style={layoutStyle}>
      <h1 style={{ color: "#7127ba" }}>Projects</h1>
      <Row
        className="projects"
        style={{ display: "flex", justifyContent: "center", gap: "2rem" }}
      >
        <Col flex={"30%"}>
          <ProjectCard />
        </Col>
        <Col flex={"30%"}>
          <ProjectCard />
        </Col>
        <Col flex={"30%"}>
          <ProjectCard />
        </Col>
        <Col flex={"30%"}>
          <ProjectCard />
        </Col>
        <Col flex={"30%"}>
          <ProjectCard />
        </Col>
        <Col flex={"30%"}>
          <ProjectCard />
        </Col>
      </Row>
    </div>
  );
};

export default Projects;
