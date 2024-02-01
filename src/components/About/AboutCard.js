import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sanket Shinde </span>
            from <span className="purple"> Pune, India.</span>
            <br />
            I am currently employed as a Solution developer at Quadwave consulting pvt ltd.
            <br />
            I have completed Integrated BE at GH Raisoni institute of technology and engineering
            wagholi pune.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> gyming
            </li>
            <li className="about-activity">
              <ImPointRight /> listening podcasts
            </li>
            <li className="about-activity">
              <ImPointRight /> video games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sanket</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
