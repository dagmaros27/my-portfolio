import { useState } from "react";
import { Button, Col, Form, Input, Layout, Row, message } from "antd";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import emailjs from "emailjs-com";
import "./contact.css";
import Socials from "./Social";

const layoutStyle = {
  minHeight: "60vh",
  padding: "3rem",
  backgroundColor: "#11071f",
  color: "white",
};

const Contact = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const sendEmail = (values) => {
    setLoading(true);
    emailjs
      .send(
        "service_89vb0al", // Replace with your EmailJS Service ID
        "template_fszvr67", // Replace with your EmailJS Template ID
        {
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
        },
        "XLmw3itVHV_lDzvnD" // Replace with your EmailJS User ID (API key)
      )
      .then(
        (response) => {
          message.success("Your message has been sent!");
          console.log(response.status);
          form.resetFields(); // Clear the form after submission
          setLoading(false);
        },
        (error) => {
          message.error("Something went wrong. Please try again.");
          console.log(error);
          setLoading(false);
        }
      );
  };

  const onFinish = (values) => {
    sendEmail(values);
    console.log(values);
  };

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
          <Form
            form={form}
            onFinish={onFinish}
            initialValues={{
              name: "",
              email: "",
              subject: "",
              message: "",
            }}
            validateMessages={{
              required: "${label} is required!",
              types: {
                email: "${label} is not a valid email!",
              },
            }}
          >
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="name"
                  rules={[
                    { required: true, message: "Please enter your name" },
                  ]}
                >
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
                <Form.Item
                  name="email"
                  rules={[
                    {
                      type: "email",
                      required: true,
                      message: "Please enter a valid email",
                    },
                  ]}
                >
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
                <Form.Item
                  name="subject"
                  rules={[
                    { required: true, message: "Please enter a subject" },
                  ]}
                >
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
                <Form.Item
                  name="message"
                  rules={[
                    { required: true, message: "Please enter a message" },
                  ]}
                >
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
                  htmlType="submit"
                  loading={loading}
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
