import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import mslogo from "../../Assets/mslogo.png";
import pcclogo from "../../Assets/pccloo.jpeg";
import sensilogo from "../../Assets/sensitek.jpeg";

import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            <b className="purple">  Education:</b>
           
            <br></br>
🎓 Indiana University Bloomington - Master's in Computer Science, CGPA: 3.8/4!
<br></br>
🎓 Vellore Institute of Technology - Bachelor's in Computer Science, CGPA: 3.9/4!
              <br />
              <br></br>
              <b className="purple">Work Experience:</b>
<br/>
<img src={sensilogo} alt="Sensitek Logo" style={{ width: '18px', height: '18px', verticalAlign: 'middle' }} />
<b className="purple">  Sensitek (New York, United States) - </b>
<br/>
Working on the T-Mobile Return Portal, I am developing robust APIs for dealers to efficiently check and manage orders.
<br/>


<br/>

<img src={mslogo} alt="Microsoft Logo" style={{ width: '18px', height: '18px', verticalAlign: 'middle' }} />

<b className="purple">  Microsoft (Karnataka, India)- </b>
<br/>
-Enhanced Microsoft Teams’ search bar by integrating secondary actions like pop-out chat and schedule a meeting, which led to a substantial 10% decrease in Time-to-Success (TTS).
<br/>

-Developed the user interface components for secondary actions using React.js and TypeScript. This involved creating modular, reusable components that provided a responsive and intuitive user experience, leveraging TypeScript's static typing to ensure robust and maintainable code.
<br/>

-Utilized GraphQL to streamline data fetching and server communication. This allowed efficient querying of only the necessary data for the secondary actions, reducing network overhead and improving the performance and responsiveness of the features.
<br/>

-Deployed the features on Microsoft Azure, ensuring scalability and reliability.
<br/>

-Set up continuous integration and continuous deployment (CI/CD) pipelines using Azure DevOps, automating the build, test, and deployment processes to ensure smooth and consistent updates.
<br/>

-Configured the pipelines to automatically run unit tests and integration tests, ensuring that new code changes did not introduce any regressions.
<br/>
<br/>
<img src={pcclogo} alt="PCC Logo" style={{ width: '20px', height: '20px', verticalAlign: 'middle' }} />

<b className="purple"> Pcc Softech Pvt. Ltd. (Delhi, India) - </b>
<br/>

- Optimized API latencies, reducing response times significantly, and revamped group pricing and combo strategies to resolve complex pricing and inventory challenges.
<br/>

- Developed an on-host proxy service using Golang, implementing rate-limiting and caching for ingress requests.
<br/>

- Worked in an agile environment, creating RFC documents, provisioning AWS resources through Terraform, handling authentication between AWS, Vault, and Lambda, writing scripts in GoLang on AWS Lambda, debugging network issues, modifying Atlantis configuration, and deploying solutions to staging and production environments.
<br/>

- Implemented a PostgreSQL adapter for the Utopia-PHP database library.
<br/>

- Implemented authentication-related tasks, limited failed attempts, allowed only public domains in webhook events, and performed bug fixes and performance enhancements.
<br/>
<br/>
<br/>
<br/>

 <b className="purple">  Fun Fact:</b>
<br/>
🎥 I run a YouTube channel called Tech Wizard where I unravel coding mysteries and share cool tech stuff.
<ul className="home-about-social-links">
 <li className="social-icons">
                <a
                  href="https://www.youtube.com/channel/UCqEXx97n0Z7_dU_qhsfNdAA"
                  target="_blank"
                  rel="noreferrer"
                
                >
                  <AiFillYoutube />
                </a>
              </li>

  </ul>  
 
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
  Feel free to <span className="purple">connect</span> with me @ 
  
  <a 
    href="mailto:dhingramuskan2001@gmail.com"
    style={{ textDecoration: 'none', color: 'inherit' }} // Optional: This will remove the underline and inherit text color
  >
    dhingramuskan2001@gmail.com
  </a>
</p>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/muskan888?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
           
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/muskandhingra/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.youtube.com/channel/UCqEXx97n0Z7_dU_qhsfNdAA"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillYoutube />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
