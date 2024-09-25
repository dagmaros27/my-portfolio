import { FaLinkedinIn, FaGithub, FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import "./socials.css";

const socialLinks = [
  {
    icon: <FaLinkedinIn />,
    href: "https://www.linkedin.com/in/dagmaros27",
    label: "LinkedIn",
    bgColor: "#7127ba",
    color: "#171515",
  },
  {
    icon: <FaGithub />,
    href: "https://github.com/dagmaros27",
    label: "GitHub",
    bgColor: "#7127ba",
    color: "#171515",
  },
  {
    icon: <FaTelegram />,
    href: "https://telegram.me/dagua27",
    label: "Telegram",
    bgColor: "#7127ba",
    color: "#171515",
  },
  {
    icon: <MdEmail />,
    href: "mailto:dagmawimisker1@gmail.com",
    label: "Email",
    bgColor: "#7127ba",
    color: "#171515",
  },
  {
    icon: <SiLeetcode />,
    href: "https://leetcode.com/u/dagmaros27/",
    label: "Leetcode",
    bgColor: "#7127ba",
    color: "#171515",
  },
];

const SocialIcons = () => {
  return (
    <div className="social-icons">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="social-icon"
          aria-label={link.label}
          target="_blank"
          rel="noopener noreferrer"
          style={{ background: link.bgColor, color: link.color }}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
