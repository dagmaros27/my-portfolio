import React from "react";
import { Col, Dropdown, Image, Layout, Menu, Row } from "antd";
import logo from "../../assets/Logo.png";
import "./navbar.css";

const headerStyle = {
  height: "5rem",
  borderRadius: "3rem",
  margin: "0 2rem",
  marginTop: "3rem",
  padding: 0,
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
      <Menu.Item key={item.key} style={{ color: "white" }}>
        {item.title}
      </Menu.Item>
    ));
  };

  return (
    <div className="header-wrapper">
      <Layout.Header className="header" style={headerStyle}>
        <Row justify="space between" align="middle">
          <Col flex="auto" style={{ paddingLeft: "0.2rem" }}>
            <div className="logo">
              <Image
                src={logo}
                width={"5rem"}
                height={"5rem"}
                style={{ borderRadius: "2.5rem" }}
                preview={false}
              />
            </div>
          </Col>
          <Col flex="auto">
            <Menu
              mode="horizontal"
              className="menu"
              style={{
                justifyContent: "center",
                backgroundColor: "#1A0B2E",
                color: "white",
              }}
            >
              {renderMenuItems()}
            </Menu>
          </Col>
          <Col flex="auto">
            <Dropdown
              menu={<Menu>{renderMenuItems()}</Menu>}
              trigger={["hover"]}
              placement="bottomRight"
              className="dropdown"
            >
              <span style={{ color: "white" }}>Menu</span>
            </Dropdown>
          </Col>
        </Row>
      </Layout.Header>
    </div>
  );
};

export default Navbar;
