import { Col, Image, Layout, Row } from "antd";
import React, { useEffect, useState } from "react";
import hero from "../../assets/Hero.png";
import "./hero.css";

const layoutStyle = {
  minHeight: "80vh",
  marginTop: "5rem",
};

const Hero = () => {
  const [text, setText] = useState("Software Engineer");

  useEffect(() => {
    const textLoad = () => {
      setTimeout(() => {
        setText("Fullstack Engineer");
      }, 4000);
      setTimeout(() => {
        setText("Website Developer");
      }, 8000);
      setTimeout(() => {
        setText("Software Engineer");
      }, 12000);
    };

    const interval = setInterval(textLoad, 12000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div style={layoutStyle}>
      <Row>
        <Col
          md={10}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
          }}
        >
          <div style={{ width: "70%" }}>
            <h1>Hello👋🏻</h1>
            <h1>
              <span style={{ color: "#7127BA" }}>Dagmawi Misker, here</span>
            </h1>

            <div className="container">
              <span className="text first-text">I'm a </span> &nbsp;
              <span className="text sec-text">{text}</span>
            </div>
          </div>
        </Col>
        <Col
          md={14}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="gooey">
            <div className="image-container">
              <Image src={hero} preview={false} />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Hero;
