import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import contactmanagement from "../assets/img/contactmanagement.jpg";
import bankimage from "../assets/img/bank.png";
import ecommerceimage from "../assets/img/ecommerce.jpg";
import studentimage from "../assets/img/student.jpg";
import projectimage from "../assets/img/project.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Contact Management System",
      description:
        "Simplified user interactions and contact management. Leveraged Spring Boot for robust backend functionality, and HTML/CSS/React.js for a visually appealing frontend. Implemented JWT for secure authentication",
      imgUrl: contactmanagement,
    },
    {
      title: "ATM and Banking",
      description:
        "Designed for real-world use, allowing users to perform all transactions easily, like a real ATM or banking system. Used Spring Boot for the backend and HTML/CSS/React.js for the frontend to make it user-friendly.",
      imgUrl: bankimage,
    },
    {
      title: "E Commerce Website",
      description:
        "Developed basic features for an e-commerce website, using HTML/CSS/React.js for the frontend and Spring Boot for user authentication, incorporating Spring Security or JWT for enhanced security.",
      imgUrl: ecommerceimage,
    },
    {
      title: "Student Management System",
      description:
        "Developed a student management system for learning purposes, utilizing NetBeans for development, along with Core Java, Servlets, and JSP for backend logic and frontend rendering.",
      imgUrl: studentimage,
    },
    {
      title: "Crud Application",
      description:
        "Developed a CRUD application using Apex and Lightning Web Components in Salesforce, enabling efficient creation, retrieval, updating, and deletion of data",
      imgUrl: projectimage,
    },
    {
      title: "Web Service System",
      description:
        "Implemented a web service system using REST API in Salesforce, facilitating seamless integration with external systems",
      imgUrl: projectimage,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I have developed a Contact Management System and an
                    ATM/Banking Management System using Spring Boot for backend
                    and HTML/CSS/React.js for frontend. Additionally, I designed
                    an E-commerce Website with HTML/CSS/React.js and Spring
                    Boot. For educational purposes, I created a Student
                    Management System using NetBeans, Core Java, Servlets, and
                    JSP.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Experience</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Future Plan</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <p>
                          "In the future, I want to keep learning and growing,
                          taking on new challenges and working on exciting
                          projects. I hope to make a difference in the tech
                          world, using my skills and ideas to create cool stuff
                          and help others".
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  );
};
