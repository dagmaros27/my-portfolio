import { Button } from "antd";
import "./project.css";
import { FaCode } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import PropTypes from "prop-types";

const ProjectCard = ({ project }) => {
  return (
    <div className="tailwind-cheat-sheet">
      <div className="tailwind-card">
        <div className="tailwind-card-image">
          <img src={project.image} alt={project.title} />
        </div>
        <div className="tailwind-card-content">
          <span className="tailwind-card-label">
            {project.type}
            <div className="tailwind-card-buttons">
              {project.hasPreview && (
                <Button
                  size="small"
                  style={{
                    backgroundColor: "white",
                    color: "#7127ba",
                    fontWeight: "bold",
                  }}
                  icon={<FiExternalLink />}
                >
                  <a
                    href={project.previewLink}
                    style={{ textDecoration: "none", color: "inherit" }}
                    target="_blank"
                  >
                    Preview
                  </a>
                </Button>
              )}
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
                <a
                  href={project.previewLink}
                  style={{ textDecoration: "none", color: "inherit" }}
                  target="_blank"
                >
                  Github
                </a>
              </Button>
            </div>
          </span>
          <span className="tailwind-card-title">{project.title}</span>
          <p className="tailwind-card-description">{project.description}</p>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    hasPreview: PropTypes.bool.isRequired,
    previewLink: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
