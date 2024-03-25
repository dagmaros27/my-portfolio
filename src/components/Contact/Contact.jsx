import { Button, Col, Form, Input, Layout, Row } from "antd";
import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./contact.css";
const layoutStyle = {
  minHeight: "60vh",
  padding: "3rem",
  backgroundColor: "#11071f",
  color: "white",
};

const Contact = () => {
  return (
    <Layout style={layoutStyle}>
      <h1 style={{ color: "#7127ba" }}>Contact me</h1>
      <Row>
        <Col span={12}>
          <h3 style={{ marginTop: "0" }}>Contact Information</h3>
          <Row>
            <Col
              span={8}
              style={{
                display: "flex",
                alignItems: "center",

                gap: "1rem",
              }}
            >
              <MdEmail size={24} style={{ color: "#7127ba" }} />{" "}
              <span>Email</span>
            </Col>
            <Col span={16}>
              <p>dagmawimisker1@gmail.com</p>
            </Col>

            <Col
              span={8}
              style={{
                display: "flex",
                alignItems: "center",

                gap: "1rem",
              }}
            >
              <FaMapMarkerAlt size={24} style={{ color: "#7127ba" }} />{" "}
              <span>Address</span>
            </Col>
            <Col span={16}>
              <p>4Kilo, Addis Ababa, Ethiopia</p>
            </Col>

            <Col
              span={8}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <FaPhoneAlt size={24} style={{ color: "#7127ba" }} />{" "}
              <span>Phone Number</span>
            </Col>
            <Col span={16}>
              <p>+251953099662</p>
            </Col>
          </Row>
          <Row style={{ marginTop: "0.5rem" }}>
            <h3>Socials</h3>
            <ul className="example-2">
              <li className="icon-content">
                <a
                  href="https://www.linkedin.com/in/dagmaros27/"
                  target="blank"
                  aria-label="LinkedIn"
                  data-social="linkedin"
                >
                  <div className="filled"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
                <div className="tooltip">LinkedIn</div>
              </li>
              <li className="icon-content">
                <a
                  href="https://www.github.com/dagmaros27"
                  target="blank"
                  aria-label="GitHub"
                  data-social="github"
                >
                  <div className="filled"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
                <div className="tooltip">GitHub</div>
              </li>
              <li className="icon-content">
                <a
                  data-social="telegram"
                  aria-label="Telegram"
                  href="https://t.me/dagua27"
                  target="blank"
                >
                  <div className="filled"></div>
                  <svg viewBox="0 0 100 100" version="1.1">
                    <path
                      fill="currentColor"
                      d="M95,9.9c-1.3-1.1-3.4-1.2-7-0.1c0,0,0,0,0,0c-2.5,0.8-24.7,9.2-44.3,17.3c-17.6,7.3-31.9,13.7-33.6,14.5  c-1.9,0.6-6,2.4-6.2,5.2c-0.1,1.8,1.4,3.4,4.3,4.7c3.1,1.6,16.8,6.2,19.7,7.1c1,3.4,6.9,23.3,7.2,24.5c0.4,1.8,1.6,2.8,2.2,3.2  c0.1,0.1,0.3,0.3,0.5,0.4c0.3,0.2,0.7,0.3,1.2,0.3c0.7,0,1.5-0.3,2.2-0.8c3.7-3,10.1-9.7,11.9-11.6c7.9,6.2,16.5,13.1,17.3,13.9  c0,0,0.1,0.1,0.1,0.1c1.9,1.6,3.9,2.5,5.7,2.5c0.6,0,1.2-0.1,1.8-0.3c2.1-0.7,3.6-2.7,4.1-5.4c0-0.1,0.1-0.5,0.3-1.2  c3.4-14.8,6.1-27.8,8.3-38.7c2.1-10.7,3.8-21.2,4.8-26.8c0.2-1.4,0.4-2.5,0.5-3.2C96.3,13.5,96.5,11.2,95,9.9z M30,58.3l47.7-31.6  c0.1-0.1,0.3-0.2,0.4-0.3c0,0,0,0,0,0c0.1,0,0.1-0.1,0.2-0.1c0.1,0,0.1,0,0.2-0.1c-0.1,0.1-0.2,0.4-0.4,0.6L66,38.1  c-8.4,7.7-19.4,17.8-26.7,24.4c0,0,0,0,0,0.1c0,0-0.1,0.1-0.1,0.1c0,0,0,0.1-0.1,0.1c0,0.1,0,0.1-0.1,0.2c0,0,0,0.1,0,0.1  c0,0,0,0,0,0.1c-0.5,5.6-1.4,15.2-1.8,19.5c0,0,0,0,0-0.1C36.8,81.4,31.2,62.3,30,58.3z"
                    ></path>
                  </svg>
                </a>
                <div className="tooltip">Telegram</div>
              </li>
            </ul>
          </Row>
        </Col>
        <Col md={12}>
          <h3 style={{ marginTop: "0" }}>Send me a message</h3>
          <Form>
            <Row style={{ gap: "2rem" }}>
              <Col md={10}>
                <Form.Item style={{ color: "white" }}>
                  <Input
                    placeholder="your name"
                    style={{ padding: "1rem" }}
                    color="black"
                  />
                </Form.Item>
                <Form.Item>
                  <Input
                    type="email"
                    placeholder="email"
                    style={{ padding: "1rem" }}
                  />
                </Form.Item>
                <Form.Item>
                  <Input placeholder="subject" style={{ padding: "1rem" }} />
                </Form.Item>
              </Col>
              <Col md={10}>
                <Form.Item>
                  <Input.TextArea placeholder="message" rows={5} />
                </Form.Item>
                <Button
                  style={{
                    width: "100%",
                    height: "3rem",
                    backgroundColor: "#7127ba",
                    fontWeight: "bold",
                    "&:hover": {
                      pointer: "cursor",
                      color: "#7127ba",
                    },
                  }}
                  type="primary"
                >
                  Send
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};

export default Contact;
