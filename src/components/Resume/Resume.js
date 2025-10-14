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
              title="Underwriter"
              date="United Wholesale Mortgage (UWM) - Pontiac, USA - Oct 2024 - Present"
              content={[
                "Review and underwrite mortgage loan applications in compliance with company and investor guidelines, from initial underwrite through final closing.",
                "Analyze complex borrower and loan data in BOLT and EDGE to deliver precise, compliant, and data-driven credit decisions.",
                "Leverage Salesforce and Queue Manager to automate workflows, streamline communication, and optimize file prioritization.",
                "Utilize ChatUWM and prompt-engineering techniques to efficiently extract insights from job aids, underwriting manuals, and investor guidelines for AI-assisted decision systems.",
              ]}
            />
            <Resumecontent
              title="MERN Stack Developer"
              date="YourBeat Inc, Arizona State University - Tempe, USA - Nov 2022 - Oct 2024"
              content={[
                "Developed and maintained web applications using React.js and PostgreSQL, enhancing overall performance.",
                "Led Agile teams to deliver projects on time, enhancing collaboration across cross-functional teams.",
                "Integrated RESTful APIs with Java Spring Boot, ensuring seamless communication between the application.",
                "Worked closely with backend teams to optimize data retrieval and processing using MongoDB and Cassandra.",
              ]}
            />
            <Resumecontent
              title="Software Engineer"
              date="Contak (AI Music Startup) - Phoenix, USA - Aug 2022 - Jan 2024"
              content={[
                "Led the development of an AI-powered music platform using React, Redux, and TypeScript, catalyzing a 50% increase in daily active users.",
                "Architected and implemented an intuitive, responsive UI that streamlined user search time by 35% and bolstered overall platform engagement by 40%.",
                "Integrated GraphQL for efficient data fetching, slashing API calls by 60% and enhancing application performance.",
                "Implemented server-side rendering (SSR) with Next.js, amplifying SEO performance and cutting initial load time by 45%.",
              ]}
            />
            <Resumecontent
              title="Full-Stack Developer"
              date="E21 Designs - Chennai, India - Jun 2019 - May 2022"
              content={[
                "Engineered and deployed 15+ high-traffic web applications using React, Redux, AngularJS, and Next.js, serving over 1 million users monthly.",
                "Constructed robust backend systems using Node.js and Express, enhancing API response times by 55%.",
                "Implemented comprehensive test suites using Jest and React Testing Library, achieving 95% code coverage and minimizing post-release bugs by 70%.",
                "Optimized database queries and implemented caching strategies, resulting in a 65% reduction in server load during peak hours.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Arizona State University"
              date="2024"
              content={["M.S. in Information Technology, GPA: 4.00"]}
            />
            <Resumecontent
              title="IIBM Institute of Business Management"
              date="2020"
              content={["MBA, GPA: 4.00"]}
            />
            <Resumecontent
              title="SASTRA University"
              date="2019"
              content={["B.Tech. in Information Technology"]}
            />
            <h3 className="resume-title">Core Competencies</h3>
            <Resumecontent
              content={[
                "Frontend: React, Redux, Angular, Vue.js, TypeScript, HTML5, CSS3, SASS, Webpack",
                "Backend: Node.js, Express, MongoDB, GraphQL, RESTful APIs, Microservices",
                "UX/UI & DevOps: Figma, Adobe XD, Wireframing, AWS, Docker, Kubernetes, CI/CD",
                "Testing & Tools: Jest, React Testing Library, Cypress, Git, Agile/Scrum, JIRA, TDD",
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
