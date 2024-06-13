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
              title="Chief Technology Officer"
              date="Reguvare - Phoenix, USA - Jan 2024 - Jun 2024"
              content={[
                "Led the development of a real-time biofeedback dashboard using React, Redux, and WebSockets, increasing user feedback by 15%.",
                "Implemented complex UI interactions with Framer Motion, enhancing user engagement and experience.",
                "Optimized application performance by 20%, leading to faster load times and improved user satisfaction",
                "Collaborated with design and product teams to create seamless user interfaces that improved the overall user journey",
                "Conducted code reviews and mentored junior developers, fostering a culture of continuous improvement and knowledge sharing.",
                "Oversaw the entire technology strategy and execution, ensuring alignment with business goals.",
              ]}
            />
            <Resumecontent
              title="Senior Frontend Developer"
              date="Contak (AI Music Startup) - Phoenix, USA - Aug 2022 - Jan 2024"
              content={[
                "Led front-end development of AI-powered music platform using React, Redux, and TypeScript.",
                "Designed intuitive UI, reducing search time by 23%.",
                "Integrated GraphQL for efficient data fetching.",
                "Implemented WebSockets for real-time chat and notifications.",
                "Worked closely with the backend team to ensure seamless integration and data consistency across the application.",
                "Conducted code reviews and mentored junior developers, fostering a culture of continuous improvement and knowledge sharing.",
                "Developed the product strategy and roadmap, ensuring alignment with market needs and business goals."
              ]}
            />
            <Resumecontent
              title="Software Developement Engineer"
              date="Amazon - Hyderabad, India - Dec 2020 - May 2022"
              content={[
                "Built and maintained scalable web applications using Angular and Node.js.",
                "Developed RESTful APIs for internal tools, improving efficiency by 30%.",
                "Integrated third-party APIs and wrote tests.",
                "Collaborated with cross-functional teams to deliver high-quality software.",
                "Participated in Agile ceremonies and code reviews.",
                "Mentored junior developers and interns, fostering a culture of continuous learning and growth.",
              ]}
            />
            <Resumecontent
              title="Software Engineer"
              date="Airbnb - Bengaluru, India - Jun 2019 - Dec 2020"
              content={[
                "Developed scalable web applications using React and TypeScript, enhancing user interaction and performance.",
                "Integrated GraphQL for efficient data fetching and seamless interaction between frontend and backend services",
                "Worked closely with design and product teams to develop intuitive user interfaces and improve overall user experience",
                "Implemented testing and performance optimization strategies, increasing application reliability and speed.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Arizona State University"
              date="2024"
              content={["Master of Science - MS, Technology, GPA: 4.00"]}
            />
            <Resumecontent
              title="IIBM Institute of Business Management"
              date="2020"
              content={["MBA, GPA: 4.00"]}
            />
            <Resumecontent
              title="SASTRA University"
              date="2019"
              content={["Bachelor of Technology - B.Tech in Information Technology"]}
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
