import React from "react";
import { programmingLanguages, tools } from "./skillsData.js";
import { Col, Row, Space } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skills = () => {
  return (
    <div>
      <h2> Skillset</h2>
      <Row
        style={{
          marginBottom: "2rem",
        }}
      >
        <Space size={64} wrap>
          {programmingLanguages.map((skill, index) => {
            const key = `col-${index}`;
            return (
              <Col
                style={{ display: "flex", flexDirection: "column" }}
                key={key}
                xs={{
                  flex: "100%",
                }}
                sm={{
                  flex: "50%",
                }}
                md={{
                  flex: "40%",
                }}
                lg={{
                  flex: "20%",
                }}
                xl={{
                  flex: "10%",
                }}
              >
                <FontAwesomeIcon
                  icon={skill.icon}
                  style={{ width: "4rem", height: "4rem" }}
                />
                {skill.name}
              </Col>
            );
          })}
        </Space>
      </Row>
      <Row>
        <Space size={64} wrap>
          {tools.map((tool, index) => {
            const key = `col-${index}`;
            return (
              <Col
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
                key={key}
                xs={{
                  flex: "100%",
                }}
                sm={{
                  flex: "50%",
                }}
                md={{
                  flex: "40%",
                }}
                lg={{
                  flex: "20%",
                }}
                xl={{
                  flex: "10%",
                }}
              >
                <FontAwesomeIcon
                  icon={tool.icon}
                  style={{ width: "4rem", height: "4rem" }}
                />
                {tool.name}
              </Col>
            );
          })}
        </Space>
      </Row>
    </div>
  );
};

export default Skills;
