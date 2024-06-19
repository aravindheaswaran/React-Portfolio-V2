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
              title="Chief Technology Officer (CTO)"
              date="Reguvare - Phoenix, USA - Jan 2024 - Jun 2024"
              content={[
                "Acted as a liaison between business and IT, leading the development of a real-time biofeedback dashboard, increasing user feedback by 15%.",
                "Directed the implementation of machine learning algorithms to enhance predictive accuracy by 20%.",
                "Optimized application performance by 20%, leading to faster load times and improved user satisfaction.",
                "Collaborated with design and product teams to create seamless user interfaces that improved the overall user journey.",
                "Conducted code reviews and mentored junior developers, fostering a culture of continuous improvement and knowledge sharing.",
                "Oversaw the entire technology strategy and execution, ensuring alignment with business goals.",
              ]}
            />
            <Resumecontent
              title="Senior Product Manager"
              date="Contak (AI Music Startup) - Phoenix, USA - Aug 2022 - Jan 2024"
              content={[
                "Developed business requirements into functional specs, improving user interaction by 30%.",
                "Integrated NLP models for personalized music recommendations, boosting user engagement by 25%.",
                "Implemented GraphQL for efficient data fetching, reducing load times by 35%.",
                "Executed product strategy and roadmap, achieving a 15% user base growth.",
                "Coordinated cross-functional teams to deliver high-quality features and improve the overall product experience.",
              ]}
            />
            <Resumecontent
              title="Senior Software Engineer"
              date="Amazon - Hyderabad, India - Dec 2020 - May 2022"
              content={[
                "Built and maintained scalable web applications using Angular and Node.js.",
                "Implemented server-side rendering (SSR) for improved SEO and performance.",
                "Developed and maintained APIs ensuring high performance and reliability.",
                "Integrated various third-party APIs and wrote extensive unit and integration tests to ensure application reliability.",
                "Collaborated with cross-functional teams to define project requirements and deliver high-quality software solutions.",
                "Maintained and updated existing codebases, ensuring the ongoing stability and performance of web applications.",
              ]}
            />
            <Resumecontent
              title="Software Engineer"
              date="Airbnb - Bengaluru, India - Jun 2019 - Dec 2020"
              content={[
                "Developed scalable web applications using React and TypeScript, enhancing user interaction and performance.",
                "Integrated GraphQL for efficient data fetching and seamless interaction between frontend and backend services.",
                "Worked closely with design and product teams to develop intuitive user interfaces and improve overall user experience.",
                "Implemented testing and performance optimization strategies, increasing application reliability and speed.",
                "Contributed to the development of microservices architecture, enhancing the scalability and maintainability of the platform.",
                "Collaborated with cross-functional teams to ensure alignment of technical solutions with business objectives.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Arizona State University"
              date="2024"
              content={["Master of Science - MS, Technology Management, GPA: 4.00"]}
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
                "Product Management: Product Strategy, Roadmapping, Agile Development, User Research, Stakeholder Management, Go-to-Market Strategy, Product Marketing",
                "Technical Skills: Java, Kotlin, JavaScript, TypeScript, Node.js, Python, HTML5, CSS3, TensorFlow, PyTorch, Keras, RESTful APIs, GraphQL, Microservices, SQL, NoSQL",
                "Tools: Figma, Jira, Confluence, Asana, Microsoft Azure, AWS, Google Cloud, Docker, Kubernetes, CI/CD (Jenkins, CircleCI, GitLab, Azure DevOps)",
                "Other Skills: CRM, UX/UI Design, Team Leadership, Strategic Planning, Problem Solving, Communication, Project Management",
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
