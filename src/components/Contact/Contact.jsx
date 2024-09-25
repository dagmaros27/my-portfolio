import { Button, Col, Form, Input, Layout, Row } from "antd";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./contact.css";
import Socials from "./Social";

const layoutStyle = {
  minHeight: "60vh",
  padding: "3rem",
  backgroundColor: "#11071f",
  color: "white",
};

const Contact = () => {
  return (
    <Layout style={layoutStyle} id="contact">
      <h1 style={{ color: "#7127ba" }}>Contact me</h1>
      <Row>
        <Col xs={24} md={12}>
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
          <Row style={{ marginTop: "0.5rem", flexDirection: "column" }}>
            <h3>Socials</h3>
            <Socials />
          </Row>
        </Col>
        <Col xs={24} md={12}>
          <h3 style={{ marginTop: "0" }}>Send me a message</h3>
          <Form>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item>
                  <Input
                    placeholder="Your name"
                    style={{
                      padding: "0.5rem",
                      backgroundColor: "#11071f",
                      color: "white",
                    }}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item>
                  <Input
                    type="email"
                    placeholder="Email"
                    style={{
                      padding: "0.5rem",
                      backgroundColor: "#11071f",
                      color: "white",
                    }}
                  />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item>
                  <Input
                    placeholder="Subject"
                    style={{
                      padding: "0.5rem",
                      backgroundColor: "#11071f",
                      color: "white",
                    }}
                  />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item>
                  <Input.TextArea
                    placeholder="Message"
                    rows={4}
                    style={{
                      padding: "0.5rem",
                      backgroundColor: "#11071f",
                      color: "white",
                    }}
                  />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Button
                  style={{
                    width: "100%",
                    height: "2.5rem",
                    backgroundColor: "#7127ba",
                    fontWeight: "bold",
                    color: "white",
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
