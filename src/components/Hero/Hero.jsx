import { Col, Image, Row } from "antd";
import hero from "../../assets/Images/Hero.png";
import "./hero.css";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const layoutStyle = {
  minHeight: "80vh",
  marginTop: "5rem",
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const Hero = () => {
  return (
    <div style={layoutStyle} id="hero">
      <Row>
        <Col
          md={10}
          xs={24}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
          }}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInLeft}
            style={{ width: "80%" }}
          >
            <h1>Hello👋🏻</h1>
            <h1>
              <span style={{ color: "#7127BA" }}>Dagmawi Misker, here</span>
            </h1>

            <div className="container">
              <span className="text first-text">I&apos;m a </span> &nbsp;
              <span className="typewriter">
                <Typewriter
                  words={[
                    "Full stack developer",
                    "Software engineer",
                    "Go developer",
                    "MERN Specialist",
                  ]}
                  loop={false}
                  cursorColor="#7127ba"
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </div>
          </motion.div>
        </Col>

        <Col
          md={14}
          xs={24}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInRight}
            className="gooey"
          >
            <div className="image-container">
              <Image src={hero} preview={false} />
            </div>
          </motion.div>
        </Col>
      </Row>
    </div>
  );
};

export default Hero;
