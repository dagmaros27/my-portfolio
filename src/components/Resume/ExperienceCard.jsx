import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";

const ExperienceCard = () => {
  return (
    <Card>
      <Meta
        title={"AfroMina Solutions"}
        description={
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Frontend Developer Intern</span>
            <span>Jul,2023 - Sep,2023</span>
          </div>
        }
      />

      <p>
        collaborated with a dynamic team to develop a cutting-edge web
        application using React and Material UI, gained hands-on experience in
        front-end development
      </p>
      <p>
        contributed 10+ reusable UI components to the creation of a
        user-friendly and visually appealing interface that enhanced the overall
        user experience
      </p>
    </Card>
  );
};

export default ExperienceCard;
