import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/Resume.pdf";
import { AiOutlineDownload, AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Resume() {
  // ------- DATA (easy to tweak later) -------
  const experience = [
    {
      title: "Analyst",
      date: "United Wholesale Mortgage (UWM) · Pontiac, MI · Oct 2024 – Present",
      content: [
        "Collaborate with cross-functional stakeholders including operations, compliance, and senior leaders to analyze mortgage workflows and ensure alignment with investor guidelines and regulatory requirements",
        "Facilitate information gathering sessions with subject matter experts and processors to understand loan scenarios, business rules, and underwriting policies for quality decision-making",
        "Create IT tickets to report system bugs and enhancement requests for AUS, BOLT, EDGE, Salesforce, collaborating with technical teams and solutions analysts to resolve issues and lead the file to CTC",
        "Perform SWAT auditor duties utilizing Excel and Airtable to analyze loan pipeline errors, identify trends, and recommend corrective actions",
        "Make critical data-driven decisions under pressure in fast-paced, high-volume production environment while maintaining guideline compliance"
      ],
    },
    {
      title: "Senior Business Analyst / Software Developer",
      date: "YourBeat Inc (ASU) · Remote · Nov 2022 – Oct 2024",
      content: [
        "Led Agile ceremonies (planning, refinement, demos, retros) across 12+ sprints; managed deliverables and dependencies with cross-functional stakeholders.",
        "Ran requirements workshops; produced BRDs/FRDs, user stories, and acceptance criteria; aligned roadmap with KPIs and risk constraints.",
        "Executed gap analysis and transition plans from as-is to future state; delivered UX/process improvements yielding ~40% engagement lift.",
        "Coordinated UAT with 50+ users; standardized test case design and traceability in JIRA/Confluence."
      ],
    },
    {
      title: "Full-Stack Engineer / Business Analyst",
      date: "Reguvare · Phoenix, AZ · Jan 2024 – Jun 2024",
      content: [
        "Defined scope, non-functional/functional requirements, and success metrics; prioritized backlog and release plans.",
        "Authored BPMN models and vendor API integration specs; partnered through SDLC to delivery.",
        "Built SQL queries/dashboards for operational insights; informed decision-making and risk mitigation."
      ],
    },
    {
      title: "Software Engineer / Product Analyst",
      date: "Contak (AI Music) · Phoenix, AZ · Aug 2022 – Jan 2024",
      content: [
        "Captured stakeholder needs; documented integration requirements and rollout plans; supported API workflows.",
        "Wrote/optimized SQL for analytics and performance reporting used by leadership (~25% query/runtime gains)."
      ],
    },
    {
      title: "Web Developer / Jr. Business Analyst",
      date: "E21 Designs · Chennai, India · Jun 2019 – May 2022",
      content: [
        "Gathered requirements and delivered 15+ client web apps; maintained user stories/acceptance criteria and traceability in JIRA.",
        "Facilitated client UAT, managed issue resolution, and ensured releases met business objectives within Agile cycles."
      ],
    },
  ];

  const education = [
    {
      title: "Arizona State University",
      date: "2024",
      content: ["M.S. in Technology Management, GPA: 4.00"],
    },
    {
      title: "IIBM Institute of Business Management (Delhi)",
      date: "2021",
      content: ["MBA with Distinction"],
    },
    {
      title: "SASTRA University",
      date: "2019",
      content: ["B.Tech. in Information Technology"],
    },
  ];

  const competencies = [
    "BA: Requirements Elicitation, Gap Analysis, As-is/To-be, Process Mapping (BPMN), Stakeholder & Executive Communication, Negotiation, UAT, SDLC, Change Management",
    "Data/Tech: SQL, Data Modeling, API Management, Vendor Integrations, JSON/XML/CSV, Reporting/Dashboards",
    "Tools: JIRA, Confluence, Salesforce, Visio, Excel, Cognos Analytics, Power BI, Tableau, Azure DevOps",
    "Domain: Mortgage & Financial Services, Loan Origination Systems (EDGE, BOLT), Compliance/QC, AUS",
  ];

  const certifications = [
    "IBM Business Analyst with Excel, SQL & Cognos Analytics",
    "Microsoft Business Analyst",
    "IBM Agile Development & Scrum",
    "Agile with Atlassian JIRA",
  ];

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        {/* Download */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank" rel="noopener noreferrer" aria-label="Download Resume PDF">
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>

        {/* Content */}
        <Row className="resume">
          {/* LEFT COLUMN */}
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            {experience.map((role, idx) => (
              <Resumecontent
                key={idx}
                title={role.title}
                date={role.date}
                content={role.content}
              />
            ))}
          </Col>

          {/* RIGHT COLUMN */}
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            {education.map((ed, idx) => (
              <Resumecontent key={idx} title={ed.title} date={ed.date} content={ed.content} />
            ))}

            <h3 className="resume-title">Core Competencies</h3>
            <Resumecontent content={competencies} />

            <h3 className="resume-title">Certifications</h3>
            <Resumecontent content={certifications} />
          </Col>
        </Row>

        {/* Contact */}
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Contact</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me.
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/aravindhsharma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:aravindhsharma2@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Email"
                >
                  <SiGmail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aravindheaswaran"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="LinkedIn"
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
