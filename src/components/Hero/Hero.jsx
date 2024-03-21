import { Col, Image, Layout, Row } from "antd";
import React from "react";
import hero from "../../assets/Hero.png";
const layoutStyle = {
  "min-height": "80vh",
  marginTop: "10rem",
};
const Hero = () => {
  return (
    <div style={layoutStyle}>
      <Row>
        <Col
          md={12}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ width: "70%" }}>
            <h1>Hello there👋</h1>
            <h1>I'm Dagmawi Misker</h1>
            <p>
              I am a computer science student with an analytical mind and a
              passion for problem solving. I take my education seriously, and
              strive to learn as much as I can about the ever-changing field of
              computer science. I love to challenge myself with difficult
              concepts and tasks, especially when doing so helps me to expand my
              skill set.
            </p>
          </div>
        </Col>
        <Col md={12}>
          <Image src={hero} width={"32rem"} preview={false} />
        </Col>
      </Row>
    </div>
  );
};

export default Hero;
