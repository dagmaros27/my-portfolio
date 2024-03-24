import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import "./experience.css";
import { SiSitepoint } from "react-icons/si";

const ExperienceCard = () => {
  return (
    <Card style={{ backgroundColor: "#11071F", color: "white" }}>
      <Meta
        title={"AfroMina Solutions"}
        className="meta"
        style={{ color: "white" }}
        description={
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "white",
            }}
          >
            <span>Frontend Developer Intern</span>
            <span>Jul,2023 - Sep,2023</span>
          </div>
        }
        color:inherit
      />

      <p>
        <SiSitepoint color="#7127ba" /> &nbsp; collaborated with a dynamic team
        to develop a cutting-edge web application using React and Material UI,
        gained hands-on experience in front-end development
      </p>
      <p>
        <SiSitepoint color="#7127ba" /> &nbsp; contributed 10+ reusable UI
        components to the creation of a user-friendly and visually appealing
        interface that enhanced the overall user experience
      </p>
    </Card>
  );
};

export default ExperienceCard;
