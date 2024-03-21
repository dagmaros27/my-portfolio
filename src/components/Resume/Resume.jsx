import React from "react";
import Skills from "./Skills";
import Experience from "./Experience";
import { Space } from "antd";

const layoutStyle = {
  "min-height": "80vh",
  padding: "2rem",
};

const Resume = () => {
  return (
    <div style={layoutStyle}>
      <Space direction="vertical" size={"large"}>
        <Skills />
        <Experience />
      </Space>
    </div>
  );
};

export default Resume;
