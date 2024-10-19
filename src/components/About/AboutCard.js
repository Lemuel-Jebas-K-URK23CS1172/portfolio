import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">K Lemuel Jebas </span>
            from <span className="purple"> Tamil Nadu, India.</span>
            <br />
            I am currently a student at
            <span className="purple"> Karunya Institute of Technolo0gy and Sciences.</span>
            <br />
            I am currently Pursuing my B.Tech of Computer Science and Engineering.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Racing at DiRT 3
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Formula 1
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Bwoah"{" "}
          </p>
          <footer className="blockquote-footer">Kimi Raikkonen</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
