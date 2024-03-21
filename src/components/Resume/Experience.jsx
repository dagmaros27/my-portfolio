import React from "react";
import ExperienceCard from "./ExperienceCard";
import { Col, Row, Space } from "antd";

const Experience = () => {
  return (
    <div>
      <h1>Resume</h1>
      <Row>
        <Space direction="vertical" size={"large"}>
          <Col xs={24} md={{ span: 12, offset: 3 }}>
            <ExperienceCard />
          </Col>
          <Col xs={24} md={{ span: 12, offset: 12 }}>
            <ExperienceCard />
          </Col>
          <Col xs={24} md={{ span: 12, offset: 3 }}>
            <ExperienceCard />
          </Col>
          <Col xs={24} md={{ span: 12, offset: 12 }}>
            <ExperienceCard />
          </Col>
        </Space>
      </Row>
    </div>
  );
};

export default Experience;
