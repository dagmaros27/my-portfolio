import { Col, Image, Row } from "antd";
import hero from "../../assets/Hero.png";
import "./about.css";
import { PiIdentificationBadgeFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt, FaUserGraduate } from "react-icons/fa";
import ScrollAnimation from "react-animate-on-scroll";

const layoutStyle = {
  minHeight: "80vh",
  alignItems: "center",
};

const Aboutme = () => {
  return (
    <Row style={layoutStyle} id="about">
      <Col
        md={12}
        xs={24}
        className="about-image"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
          <Image
            className="about-image"
            src={hero}
            width={"32rem"}
            preview={false}
            style={{ maxWidth: "100%" }}
          />
        </ScrollAnimation>
      </Col>

      <Col md={12} xs={24} style={{ padding: "2rem" }}>
        <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
          <h1 style={{ color: "#7127ba" }}>About Me</h1>
          <p>
            I am a computer science graduate with an analytical mind and a
            passion for problem solving. I take my education seriously, and
            strive to learn as much as I can about the ever-changing field of
            computer science. I love to challenge myself with difficult concepts
            and tasks, especially when doing so helps me to expand my skill set.
          </p>

          <h3>Personal details</h3>
          <Row>
            <Col span={6} className="personal-details-icon">
              <PiIdentificationBadgeFill
                size={24}
                style={{ color: "#7127ba" }}
              />{" "}
              <span>Name</span>
            </Col>
            <Col span={18}>
              <p>Dagmawi Misker</p>
            </Col>

            <Col span={6} className="personal-details-icon">
              <MdEmail size={24} style={{ color: "#7127ba" }} />{" "}
              <span>Email</span>
            </Col>
            <Col span={18}>
              <p>dagmawimisker1@gmail.com</p>
            </Col>

            <Col span={6} className="personal-details-icon">
              <FaMapMarkerAlt size={24} style={{ color: "#7127ba" }} />{" "}
              <span>Residence</span>
            </Col>
            <Col span={18}>
              <p>Addis Ababa, Ethiopia</p>
            </Col>

            <Col span={6} className="personal-details-icon">
              <FaUserGraduate size={24} style={{ color: "#7127ba" }} />{" "}
              <span>Degree</span>
            </Col>
            <Col span={18}>
              <p>Bachelor in Computer Science</p>
            </Col>

            <Col span={6} className="personal-details-icon">
              <PiIdentificationBadgeFill
                size={24}
                style={{ color: "#7127ba" }}
              />{" "}
              <span>Freelance</span>
            </Col>
            <Col span={18}>
              <p>Available in Upwork</p>
            </Col>
          </Row>
        </ScrollAnimation>
      </Col>
    </Row>
  );
};

export default Aboutme;
