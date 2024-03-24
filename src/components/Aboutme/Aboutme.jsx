import { Col, Image, Row } from "antd";
import React from "react";
import hero from "../../assets/Hero.png";
import "./about.css";
import { PiIdentificationBadgeFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt, FaUserGraduate } from "react-icons/fa";

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
        <h1 style={{ color: "#7127ba" }}>About Me</h1>
        <p>
          I am a computer science student with an analytical mind and a passion
          for problem solving. I take my education seriously, and strive to
          learn as much as I can about the ever-changing field of computer
          science. I love to challenge myself with difficult concepts and tasks,
          especially when doing so helps me to expand my skill set.
        </p>
        <h3>Personal details</h3>
        <Row>
          <Col
            span={6}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <PiIdentificationBadgeFill size={24} style={{ color: "#7127ba" }} />{" "}
            <span>Name</span>
          </Col>
          <Col span={18}>
            <p>Dagmawi Misker</p>
          </Col>

          <Col
            span={6}
            style={{
              display: "flex",
              alignItems: "center",

              gap: "1rem",
            }}
          >
            <MdEmail size={24} style={{ color: "#7127ba" }} />{" "}
            <span>Email</span>
          </Col>
          <Col span={18}>
            <p>dagmawimisker1@gmail.com</p>
          </Col>

          <Col
            span={6}
            style={{
              display: "flex",
              alignItems: "center",

              gap: "1rem",
            }}
          >
            <FaMapMarkerAlt size={24} style={{ color: "#7127ba" }} />{" "}
            <span>Residence</span>
          </Col>
          <Col span={18}>
            <p>Addis Ababa, Ethiopia</p>
          </Col>

          <Col
            span={6}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <FaUserGraduate size={24} style={{ color: "#7127ba" }} />{" "}
            <span>Degree</span>
          </Col>
          <Col span={18}>
            <p>Bachelor in Computer Science</p>
          </Col>

          <Col
            span={6}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <PiIdentificationBadgeFill size={24} style={{ color: "#7127ba" }} />{" "}
            <span>Freelance</span>
          </Col>
          <Col span={18}>
            <p>Available in Upwork</p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Aboutme;
