import { useState, useEffect } from "react";
import { Menu, Drawer, Button, Image } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "./Navbar.css";
import { Link } from "react-scroll";
import logo from "../../assets/Images/Logo.png";

const menuItems = [
  { key: "home", title: "Home", link: "home" },
  { key: "about", title: "About", link: "about" },
  { key: "resume", title: "Resume", link: "resume" },
  { key: "projects", title: "Projects", link: "projects" },
  { key: "contact", title: "Contact", link: "contact" },
];

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderMenuItems = () => {
    return menuItems.map((item) => (
      <Menu.Item key={item.key} style={{ color: "white" }}>
        <Link
          to={item.link}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          style={{
            color: "inherit",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          {item.title}
        </Link>
      </Menu.Item>
    ));
  };

  return (
    <div className="header-wrapper">
      <nav
        className={`navbar ${scrolled ? "scrolled" : ""}`}
        style={{ backgroundColor: scrolled ? "rgba(0, 0, 0, 0.7)" : "#000000" }}
      >
        <div className="navbar-container">
          <div className="logo">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <div className="logo">
                <Image
                  src={logo}
                  width={"5rem"}
                  height={"5rem"}
                  style={{
                    borderRadius: "2.5rem",
                    cursor: "pointer",
                  }}
                  preview={false}
                />
              </div>
            </Link>
          </div>

          <div className="desktop-menu">
            <Menu
              mode="horizontal"
              style={{
                backgroundColor: "transparent",
                alignItems: "center",
              }}
            >
              {renderMenuItems()}
            </Menu>
          </div>

          <Button
            className="mobile-menu-button"
            type="primary"
            onClick={showDrawer}
          >
            <MenuOutlined />
          </Button>

          {/* Drawer for Mobile Menu */}
          <Drawer
            title="Menu"
            placement="right"
            onClose={onClose}
            open={visible}
            style={{
              backgroundColor: "#000000",
              color: "white",
            }}
          >
            <Menu
              mode="vertical"
              style={{
                backgroundColor: "#000000",
              }}
            >
              {renderMenuItems()}
            </Menu>
          </Drawer>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
