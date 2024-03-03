import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"; // Import Button from react-bootstrap
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          {/* Add a button here to go to your LeetCode profile */}
          <div className="mt-3">
            <Button
              variant="primary"
              href="https://leetcode.com/muskandhingra1/" // Replace with your actual LeetCode profile URL
              target="_blank"
              style={{ backgroundColor: "rgb(155 126 172)", borderColor: "rgb(155 126 172)" }}
            >
              <ImPointRight /> My LeetCode Profile
            </Button>
          </div>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
