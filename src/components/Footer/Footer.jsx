import Layout from "antd/es/layout/layout";
import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <Layout.Footer
      style={{
        padding: "1rem",
        backgroundColor: "#000000",
        color: "white",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <p>Copyright &copy; {date.getFullYear()} Dagmawi Misker </p>
    </Layout.Footer>
  );
};

export default Footer;
