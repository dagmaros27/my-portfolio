import codicap from "../../assets/Images/projects/codicap.png";
import safeCampus from "../../assets/Images/projects/safe.png";
import evangadi from "../../assets/Images/projects/evangadi forum.png";
import amazon from "../../assets/Images/projects/amazon.png";
import mead from "../../assets/Images/projects/mead.png";
import taskApi from "../../assets/Images/projects/task api.webp";

const myprojects = [
  {
    id: 1,
    title: "CODICAP",
    description:
      "AI-powered mobile application that allows users to upload photos of coffee leaves for automated disease identification, providing instant diagnostic results and tailored recommendations for treatment",
    type: "Mobile App",
    image: codicap,
    githubLink: "https://github.com/dagmaros27/Bunna-app",
    previewLink: "https://github.com/dagmaros27/Bunna-app",
    hasPreview: false,
  },
  {
    id: 2,
    title: "Safe Campus",
    description:
      " Flutter-based application integrated with .NET APIs to prevent computer theft in colleges by providing real-time monitoring, alerting, and asset tracking, enhancing security and management efficiency for students, faculty, and campus security",
    type: "Backend API",
    image: safeCampus,
    githubLink: "https://github.com/dagmaros27/Safe-Campus",
    previewLink: "https://github.com/dagmaros27/Safe-Campus",
    hasPreview: false,
  },
  {
    id: 3,
    title: "Evangadi Forum",
    description:
      "a dynamic and engaging Q&A website meticulously crafted with the power of React, offering users an immersive and intuitive platform to connect, share knowledge, and seek answers",
    type: "Web app",
    image: evangadi,
    githubLink: "https://github.com/dagmaros27/Forum-Frontend",
    previewLink: "https://forum-frontend-bbg.pages.dev/login",
    hasPreview: true,
  },
  {
    id: 4,
    title: "Amazon E-commerce Clone",
    description:
      "Built a React-based Amazon Clone with integrated Stripe payments, offering a responsive user interface and a diverse product catalog. Ensured secure transactions and user personalization through a seamless account system",
    type: "Web App",
    image: amazon,
    githubLink: "https://github.com/dagmaros27/amazonia-frontend",
    previewLink: "https://ia-7849c.web.app/",
    hasPreview: true,
  },
  {
    id: 5,
    title: "Mead - መዓድ",
    description:
      "A lounge management system for cafeterias I built using HTML CSS and Vanilla JS with PHP and MYSQL for the backend. It tracks employees, foods and orders give summarized report for Admins",
    type: "Web App",
    image: mead,
    githubLink: "https://github.com/dagmaros27/mesob",
    previewLink: "https://github.com/dagmaros27/mesob",
    hasPreview: false,
  },
  {
    id: 6,
    title: "Task Managment API",
    description:
      " a robust Task Management API using Go, Gin, and MongoDB, providing efficient task creation, management, and retrieval functionalities. Implemented Clean Architecture principles, enhancing the maintainability, scalability, and testability of the codebase.",
    type: "Backend API",
    image: taskApi,
    githubLink: "https://github.com/dagmaros27/task-management-API",
    previewLink: "https://github.com/dagmaros27/task-management-API",
    hasPreview: false,
  },
];

export default myprojects;
