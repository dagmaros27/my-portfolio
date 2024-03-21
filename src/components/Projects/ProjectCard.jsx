import React from "react";
import project from "../../assets/project.jpg";
import { Card, Image } from "antd";
import Meta from "antd/es/card/Meta";

const ProjectCard = () => {
  return (
    <Card>
      <Image src={project} />
      <Meta title="Project Card" />
    </Card>
  );
};

export default ProjectCard;
