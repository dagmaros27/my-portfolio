import { Col, Image, Row } from "antd";
import React from "react";
import hero from "../../assets/Hero.png";
import "./about.css";

const layoutStyle = {
  "min-height": "80vh",
  alignItems: "center",
};
const Aboutme = () => {
  return (
    <Row style={layoutStyle}>
      <Col md={12} className="about-image">
        <Image
          className="about-image"
          src={hero}
          width={"32rem"}
          preview={false}
        />
      </Col>
      <Col md={12} style={{ padding: "2rem" }}>
        <h2>About Me</h2>
        <p>
          I am a computer science student with an analytical mind and a passion
          for problem solving. I take my education seriously, and strive to
          learn as much as I can about the ever-changing field of computer
          science. I love to challenge myself with difficult concepts and tasks,
          especially when doing so helps me to expand my skill set.
        </p>
        <h3>Personal details</h3>
        <Row style={{ gap: "2rem" }}>
          <Col xs={6}>
            <p>Name:</p>
            <p>Email:</p>
            <p>Residence:</p>
            <p>City:</p>
            <p>Degree:</p>
            <p>Freelance:</p>
          </Col>
          <Col xs={6}>
            <p>Dagmawi Misker</p>
            <a>dagmawimisker@gmail.com</a>
            <p>Ethiopia</p>
            <p>Addis Ababa</p>
            <p>Bachelor in Computer Science</p>
            <p>
              Available on <a>Upwork</a>
            </p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Aboutme;
