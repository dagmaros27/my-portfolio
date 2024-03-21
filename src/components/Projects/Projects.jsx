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
      <h1>Projects</h1>
      <Row>
        <Col xs={24} md={8}>
          <ProjectCard />
        </Col>
        <Col xs={24} md={8}>
          <ProjectCard />
        </Col>
        <Col xs={24} md={8}>
          <ProjectCard />
        </Col>
        <Col xs={24} md={8}>
          <ProjectCard />
        </Col>
        <Col xs={24} md={8}>
          <ProjectCard />
        </Col>
        <Col xs={24} md={8}>
          <ProjectCard />
        </Col>
      </Row>
    </div>
  );
};

export default Projects;
