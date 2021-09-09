import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.demo} target="_blank">
          <BiLinkExternal /> &nbsp;
          {props.isProject ? "Live Demo" : null}
        </Button>
        <Button
          variant="primary"
          href={props.link}
          target="_blank"
          style={{ margin: 10 }}
        >
          <BiLinkExternal /> &nbsp;
          {props.isProject ? "GitHub   " : null}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
