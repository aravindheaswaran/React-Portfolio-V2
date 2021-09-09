import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import Alinea from "../../Assets/Projects/Alinea.png";
import ContactManager from "../../Assets/Projects/contact-manager.png";
import Emojipedia from "../../Assets/Projects/emojipedia.png";
import EmployeeDatabase from "../../Assets/Projects/employee-database.png";
import ExpenseTracker from "../../Assets/Projects/expense-tracker.png";
import GoalTracker from "../../Assets/Projects/goal-tracker.png";
import GoogleKeeper from "../../Assets/Projects/google-keeper.png";
import LoginFlow from "../../Assets/Projects/login-flow.png";
import Socio from "../../Assets/Projects/socio.png";
import TaskManager from "../../Assets/Projects/task-manager.png";
import Blogsite from "../../Assets/Projects/blogsite-mongo.png";
import Todolist from "../../Assets/Projects/Todolist-mongo.png";
import Secrets from "../../Assets/Projects/secrets-app.png";
import Newsletter from "../../Assets/Projects/newsletter-signup.png";
import Tindog from "../../Assets/Projects/tindog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Project <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Alinea}
              isProject={true}
              title="Food Ordering App"
              description="Built a Food Ordering App from scratch using React.js. Split the App into small reusable components, styled the components using the built-in CSS Modules. Used react fragment as a wrapper element. Rendered the meals components by splitting them further into smaller chunks of components as meals summary and available meals components and then rendered them on App.js."
              link="https://github.com/aravindhsharma/Alinea-Food-Delivery"
              demo="http://alinea-food-delivery.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ExpenseTracker}
              isProject={true}
              title="Expense Tracker"
              description="An Expense Tracker app made with HTML, CSS, JavaScript and Reactjs. Created reusable ExpenseItem component using props to display the expense items. Built a reusable wrapper card component and passed the data through children prop. Application was hosted using Vercel."
              link="https://github.com/aravindhsharma/React-Expense-Tracker"
              demo="http://react-expense-tracker-nine.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Todolist}
              isProject={true}
              title="Todolist with MongoDB"
              description="A custom dynamic To Do List app made with HTML, CSS, JavaScript, Bootstrap, EJS Templating, Nodejs, Expressjs and connected to the MongoDB and deployed using Heroku"
              link="https://github.com/aravindhsharma/Todolist-v2"
              demo="https://todolist-v2-mongodb.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GoogleKeeper}
              isProject={true}
              title="Google Keeper"
              description="The Keeper app is replica of Google Keep made with HTML, CSS, JavaScript and Reactjs. Contains header, footer and note JSX components. Kept track of the title and content in a new note and added it to an array. Took the array to render separate note components for each item. Implemented delete note functionality with a callback to trigger delete function. Used filter function to filter out the item that needs to be deleted with the help of ID. Fine-tuned the app using pre-build react components such as material UI and react icons."
              link="https://github.com/aravindhsharma/Google-Keeper-App"
              demo="https://github.com/aravindhsharma/Google-Keeper-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TaskManager}
              isProject={true}
              title="Task Manager"
              description="Designed a TaskManager using React where the text inside the input was tracked using react state management When add button is clicked the current data in the input is added to an array and displayed as list items. Deleted the item upon click using props and filter function"
              link="https://github.com/aravindhsharma/React-Task-Manager"
              demo="http://react-task-manager-cyan.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Newsletter}
              isProject={true}
              title="Node.js Newsletter App"
              description="A Newsletter App built using Mailchimp API, node, express, HTML, CSS & Bootstrap to notify the people those who have signed up for newsletters and deployed using Heroku."
              link="https://github.com/aravindhsharma/Node.js-Newsletter"
              demo="https://mail-chimp-newsletter.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Emojipedia}
              isProject={true}
              title="React Emojipedia"
              description="Designed Emojipedia with an entry component and reused it to render distinct emoji data. Mapped through the emojipedia array and displayed all the emoji data that are available."
              link="https://github.com/aravindhsharma/React-Emojipedia"
              demo="http://react-emojipedia.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Socio}
              isProject={true}
              title="Socio Admin Panel"
              description="Socio is an app built on the top of react to display admin panel which can be accessed after the user successfully logs in. If user is not found the app automatically redirects to sign up page."
              link="https://github.com/aravindhsharma/Socio-App"
              demo="http://socio-app-swart.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tindog}
              isProject={true}
              title="Tindog Startup Site"
              description="Built a startup website called Tindog from scratch using Bootstrap. Used Grid system, flexbox and media query breakpoints to make the website responsive and intuitive for a wide range of screen sizes. Applied advanced features like Z-Index and Stacking order to create front-end design that is curated with high quality and professional-looking images. Refactored the code to make it more efficient and maintainable for reducing technical costs."
              link="https://github.com/aravindhsharma/Tindog-Startup-Site/tree/main"
              demo="https://tindog-startup-site.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Blogsite}
              isProject={true}
              title="Blogsite with MongoDB"
              description="A simple Blog Website app made with HTML, CSS, JavaScript, EJS, Nodejs, Expressjs and connected to the MongoDB. Vercel has been used to deploy the website."
              link="https://github.com/aravindhsharma/BlogSite-with-Mongo"
              demo="https://blog-site-with-mongodb.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LoginFlow}
              isProject={true}
              title="React Login Flow"
              description="A React Login Flow app created Input and Login component and rendered the page conditionally depending on user is logged in or not. Handled the events such as button clicks depending upon the user interaction using state management."
              link="https://github.com/aravindhsharma/React-Login-Flow"
              demo="http://react-login-flow.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Secrets}
              isProject={true}
              title="Secrets Social App"
              description="Secrets is a social media platform which helps the users to post thier hidden dark secrets anonymously with support for OAuth 2.0 support for third party google account sign in."
              link="https://github.com/aravindhsharma/Secrets-App"
              demo="https://secrets-app.azurewebsites.net/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ContactManager}
              isProject={true}
              title="Contact Manager"
              description="A Contact Manager built a reusable Card Component that can be reused to display various contacts using props. Managed and mapped through customized pieces of data to render the card component."
              link="https://github.com/aravindhsharma/React-Contact-manager"
              demo="http://react-contact-manager.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EmployeeDatabase}
              isProject={true}
              title="Employee Database"
              description="Employee Database is a react app which helps in updating the employee details with username and age which can be edited and modifed for future use. The app was deployed on vercel."
              link="https://github.com/aravindhsharma/Employee-Database"
              demo="http://employee-database-navy.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GoalTracker}
              isProject={true}
              title="Goal Tracker"
              description="A Goal Tracker is built using react to track the goals and daily tasks which can be assigned and modifed. With this goal tracker everyday goals can be tracked with ease."
              link="https://github.com/aravindhsharma/React-Goal-Tracker"
              demo="http://react-goal-tracker.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
