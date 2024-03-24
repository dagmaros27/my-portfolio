import Layout from "antd/es/layout/layout";
import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <Layout.Footer
      style={{
        padding: "1rem",
        backgroundColor: "#909090",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <p>Copyright &copy; Dagmawi Misker {date.getFullYear()}</p>
    </Layout.Footer>
  );
};

export default Footer;
