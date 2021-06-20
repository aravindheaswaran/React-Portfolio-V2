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
              date="Upwork Inc - Freelancing - June 2020 - Jan 2021"
              content={[
                "UI development for responsive websites using React.js, HTML, CSS & Bootstrap.",
                "Building functional components using React.js that are highly scalable and modular.",
                "Used Git Version Control for tracking changes in the projects for speed, data integrity, and support for distributed, non-linear workflows.",
                "Customized websites illustrations using Photoshop CC.",
              ]}
            />
            <Resumecontent
              title="MERN Stack Developer"
              date="E21 Designs - Intern - June 2019 - Dec 2020"
              content={[
                "Created full fledged applications using React.js, Node.js and Mongodb.",
                " Utilized the data to find the issues using Topic Modelling and Building models using LSTM, BERT to predict the sentiments of the youth.",
                "Deployed and hosted on various platforms like Netlify, Vercel, Heroku, Pages, and Firebase.",
              ]}
            />
            <Resumecontent
              title="Full Stack Developer"
              date="TCS iON - Intern - May 2018 - Aug 2018"
              content={[
                " Deployed websites to Heroku. Heroku hosts apps on the internet as full stack applications.",
                " Designed responsive layouts using HTML, CSS, Bootstrap, JavaScript and connected to SQL.",
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
              date="2019 - 2021"
              content={["MBA, Grade: A+"]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Web Developer [SCANIT - 2019 Technical Fest of SASTRA University]"
              content={[
                "Worked on creating the front-end of the website using Bootstrap, Javascript.",
              ]}
            />
            <Resumecontent
              title="Web Developer [ICUBE - 2018 Technical Fest of SASTRA University]"
              content={[
                "Operated on developing the frontend of the website using Bootstrap, Javascript and backend APIs using Node.js",
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
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:aravindhsharma2@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiGmail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aravindhsharma"
                  target="_blank"
                  rel="noreferrer"
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
