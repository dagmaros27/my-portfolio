import { Button, Image } from "antd";
import "./project.css";
import project from "../../assets/project.jpg";
import { FaCode } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
const ProjectCard = () => {
  return (
    <div className="tailwind-cheat-sheet">
      <div className="tailwind-card">
        <div className="tailwind-card-image">
          <Image src={project} />
        </div>
        <div className="tailwind-card-content">
          <span className="tailwind-card-label">
            Web app
            <div className="tailwind-card-buttons">
              <Button
                size="small"
                style={{
                  backgroundColor: "white",
                  color: "#7127ba",
                  fontWeight: "bold",
                }}
                icon={<FiExternalLink />}
              >
                Preview
              </Button>
              <Button
                size="small"
                style={{
                  backgroundColor: "white",
                  color: "#7127ba",
                  fontWeight: "bold",
                  alignItems: "center",
                }}
                icon={<FaCode />}
              >
                Github
              </Button>
            </div>
          </span>
          <span className="tailwind-card-title">Evangadi Forum</span>
          <p className="tailwind-card-description">
            A dynamic and engaging Q&A website meticulously crafted with the
            power of React, Node JS and MYSQL, offering users an immersive and
            intuitive platform to connect, share knowledge, and seek answer
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
