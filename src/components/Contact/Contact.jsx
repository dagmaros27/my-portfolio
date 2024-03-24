import { Button, Col, Form, Input, Row } from "antd";
import React from "react";

const Contact = () => {
  return (
    <>
      <h2>Contact me</h2>
      <Row>
        <Col md={8}>
          <div>
            <p>Address: Addis Ababa, Ethiopia</p>
            <p>Phone Number: +251953099662</p>
            <p>Email: dagmawimisker1@gmail.com</p>
          </div>
        </Col>
        <Col md={16}>
          <Form>
            <Row style={{ gap: "2rem", justifyContent: "center" }}>
              <Col md={10}>
                <Form.Item label="Name">
                  <Input placeholder="your name" />
                </Form.Item>
                <Form.Item label="Email">
                  <Input type="email" placeholder="email@example.com" />
                </Form.Item>
              </Col>
              <Col md={10} style={{ gap: "0.5 rem" }}>
                <Form.Item label="Message">
                  <Input.TextArea placeholder="message" />
                </Form.Item>
                <Button type="primary">Send</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Contact;
