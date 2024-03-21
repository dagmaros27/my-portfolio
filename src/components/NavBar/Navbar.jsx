import React from "react";
import { Col, Dropdown, Image, Layout, Menu, Row } from "antd";
import logo from "../../assets/logo.png"; // Import the logo image
import "./navbar.css";

const headerStyle = {
  height: 64,
  margin: "2rem",
  padding: "0.5rem",
  borderRadius: "3rem",
  position: "fixed", // Set the position to fixed
  top: 0, // Position at the top
  left: 0, // Position at the left
  right: 0, // Position at the right
  zIndex: 1000, // Set a high z-index to make sure it's on top
};

const menuItems = [
  { key: "home", title: "Home" },
  { key: "about", title: "About" },
  { key: "resume", title: "Resume" },
  { key: "projects", title: "Projects" },
  { key: "contact", title: "Contact" },
];

const Navbar = () => {
  const renderMenuItems = () => {
    return menuItems.map((item) => (
      <Menu.Item key={item.key}>{item.title}</Menu.Item>
    ));
  };

  return (
    <Layout.Header style={headerStyle}>
      <Row justify="center" align="middle">
        <Col flex="auto">
          <div className="logo" style={{ textAlign: "center" }}>
            <Image
              src={logo}
              width={"4rem"}
              height={"4rem"}
              style={{ borderRadius: "2rem" }}
            />
          </div>
        </Col>
        <Col flex="auto">
          <Menu
            theme="dark"
            mode="horizontal"
            className="menu"
            style={{ justifyContent: "center" }}
          >
            {renderMenuItems()}
          </Menu>
        </Col>
        <Col flex="auto">
          <Dropdown
            overlay={<Menu>{renderMenuItems()}</Menu>}
            trigger={["hover"]}
            placement="bottomRight"
            className="dropdown"
          >
            <span style={{ color: "white" }}>Menu</span>
          </Dropdown>
        </Col>
      </Row>
    </Layout.Header>
  );
};

export default Navbar;
