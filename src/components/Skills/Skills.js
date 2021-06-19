import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function Skills() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              My <strong className="purple">Skillsets</strong>
            </h1>
            <Container className="home-about-body">
              {" "}
              <p>
                ✔ JavaScript, Reactjs , Bootstrap, jQuery, EJS, CSS Modules,
                styled-components.{" "}
              </p>
              <p>
                ✔ Nodejs, Expressjs, MongoDB, Mongoose, Python, MySQL, API,
                RESTful API.
              </p>
              <p>
                ✔ Authentication, Cookies and Sessions, Passport.js, OAuth 2.0.
              </p>
              <p>
                ✔ Mobile-First, Responsive Design, Progressive Web Applications
                ( PWA ).
              </p>
              <p>
                ✔ Built standalone Front-end responsive applications using
                Reactjs.
              </p>
              <p>✔ Designed and built web applications using MERN Stack.</p>
              <p>✔ Agile Development & Scrum.</p>
              <p>✔ Heroku and Git.</p>
            </Container>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillsets </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default Skills;
