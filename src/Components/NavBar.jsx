import { useEffect, useState } from "react";
import {
  Collapse,
  Container,
  Nav,
  NavLink,
  Navbar,
  NavbarToggler,
} from "reactstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import githup from "../assets/img/github.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    const element = document.getElementById(value);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar id="basic-navbar-nav">
          <Nav className="me-auto" navbar>
            <img src={logo} alt="Logo" className="logo" />
            <NavLink
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </NavLink>
            <NavLink
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </NavLink>
            <NavLink
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </NavLink>
            <NavLink
              to="experience"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={activeLink === "experience" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("experience")}
            >
              Experience
            </NavLink>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/armanali-softwaredeveloper?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a
                href="https://github.com/Armanali2762/projectmanagementsystem">
                <img src={githup} alt="" />
              </a>
              <a href="https://www.instagram.com/iam_arman_turk">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <button className="vvd" onClick={() => console.log("connect")}>
              Let's Connect
            </button>
          </span>
        </Collapse>
      </Container>
    </Navbar>
  );
};
