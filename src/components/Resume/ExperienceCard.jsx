import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { SiSitepoint } from "react-icons/si";
import PropTypes from "prop-types";

const ExperienceCard = ({ experience }) => {
  return (
    <Card
      bordered={false}
      style={{
        backgroundColor: "inherit",
        color: "white",
      }}
    >
      <Meta
        title={experience.title}
        description={
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "white",
            }}
          >
            <span>
              <i>{experience.position}</i>
            </span>
          </div>
        }
      />
      {experience.details.map((detail, index) => (
        <p key={index} style={{ color: "#fff" }}>
          <SiSitepoint color="#7127ba" /> &nbsp; {detail}
        </p>
      ))}
    </Card>
  );
};
ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    title: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    details: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default ExperienceCard;
