import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Front End Developer - React.js"
              date="Upwork Inc - Freelancing - Mar 2020 - July 2021"
              content={[
                "UI development for responsive websites using React.js, HTML, CSS & Bootstrap.",
                "Building functional components using React.js that are highly scalable and modular.",
                "Updated UI, handled events and worked with complex states",
                "Used Git Version Control for tracking changes in the projects for speed, data integrity, and support for distributed, non-linear workflows.",
                "Customized websites illustrations using Photoshop CC.",
              ]}
            />
            <Resumecontent
              title="Front End Developer Intern"
              date="E21 Designs - Intern - Aug 2019 - Jan 2020"
              content={[
                "Created full fledged applications using React.js, Node.js and Mongodb.",
                "Built high quality user interfaces by building, combining functional components and managed states using hooks in react.",
                "Setting up WordPress locally and migrating it to live server.",
                "Deployed and hosted on various platforms like Netlify, Vercel, Heroku, Azure & AWS.",
              ]}
            />
            <Resumecontent
              title="Full Stack Developer Intern"
              date="TCS iON - Intern - Nov 2018 - Apr 2019"
              content={[
                "Deployed web applications to Heroku for hosting apps that are full stack web applications.",
                "Designed responsive layouts using HTML, CSS, Bootstrap, JavaScript and connected them using MySQL.",
                "Implemented most of the feature of an online bank. User can log in, request a deposit amount, do withdrawal, check his/her current balance, transfer amount from one account to another account, and view reports of all the transaction.",
                "Worked on Online Bank Management System project developed in java/jsp using JDBC. Used Microsoft access as a database to store all the details of customer account in a table.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="SASTRA University"
              date="2015 - 2019"
              content={["B.Tech - Information Technology"]}
            />
            <Resumecontent
              title="IIBM Institute of Business Management"
              date="2019 - 2020"
              content={["MBA, Grade: A+"]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Web Developer [SCANIT - 2019 Technical Fest of SASTRA University]"
              content={[
                "Worked on building the dynamic websites using wordpress.",
              ]}
            />
            <Resumecontent
              title="Web Developer [ICUBE - 2018 Technical Fest of SASTRA University]"
              content={[
                "Developed the website using Bootstrap, Javascript and fetched backend APIs using Node.js, Express.",
              ]}
            />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Contact</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me.
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/aravindhsharma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:aravindhsharma2@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiGmail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aravindhsharma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
