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
              title="Senior Frontend Developer"
              date="Reguvare - Phoenix, USA - Jan 2024 - Apr 2024"
              content={[
                "Developed real-time biofeedback dashboard using React, Redux, and WebSockets, leveraging Claude AI API to enhance biofeedback accuracy by 15%.",
                "Implemented complex UI interactions using Framer Motion.",
                "Optimized app performance by 20%.",
              ]}
            />
            <Resumecontent
              title="Senior Frontend Developer"
              date="Contak (AI Music Startup) - Phoenix, USA - Aug 2022 - Jan 2024"
              content={[
                "Led front-end development of AI-powered music platform using React, Redux, and TypeScript.",
                "Designed intuitive UI, reducing search time by 23%.",
                "Integrated GraphQL for efficient data fetching.",
              ]}
            />
            <Resumecontent
              title="Frontend Developer"
              date="E21 Designs - Chennai, India - Dec 2020 - May 2022"
              content={[
                "Developed 10+ web apps using React, Redux, AngularJS, and Next.js.",
                "Implemented server-side rendering (SSR) with Next.js for SEO and performance.",
                "Integrated third-party APIs and wrote tests.",
              ]}
            />
            <Resumecontent
              title="Full-Stack Developer"
              date="Tata Consultancy Services - Chennai, India - Jun 2019 - Dec 2020"
              content={[
                "Engineered scalable websites with 99.5% uptime.",
                "Contributed to 15+ projects, improving transactions by 40%.",
                "Built responsive apps using JavaScript, Node.js, and Python, increasing satisfaction by 30%.",
                "Optimized backend, reducing server load by 25%.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Arizona State University"
              date="2024"
              content={["M.S. in Technology Management, GPA: 4.00"]}
            />
            <Resumecontent
              title="IIBM Institute of Business Management"
              date="2020"
              content={["MBA, GPA: 4.00"]}
            />
            <Resumecontent
              title="SASTRA University"
              date="2019"
              content={["B.S. in Computer Science"]}
            />
            <h3 className="resume-title">Skills</h3>
            <Resumecontent
              content={[
                "Languages: JavaScript (ES6+), TypeScript, HTML5, CSS3, LESS, SASS",
                "Frameworks: React, Angular, Vue.js",
                "State Management: Redux, Context API, Zustand",
                "Styling: Styled Components, CSS Modules, Tailwind CSS",
                "Tools: Node.js, Babel, Webpack, NPM, Vite, Next.js",
                "APIs: RESTful, GraphQL, JWT, CORS",
                "Testing: Jest, React Testing Library, Cypress",
                "Cloud: AWS, Azure, Google Cloud",
                "Other: Web Accessibility, Agile/Scrum, AI-driven UI",
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
                  href="https://www.linkedin.com/in/aravindheaswaran"
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
