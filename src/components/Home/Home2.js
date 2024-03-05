import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import mslogo from "../../Assets/mslogo.png";
import pcclogo from "../../Assets/pccloo.jpeg";
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

<img src={mslogo} alt="Microsoft Logo" style={{ width: '18px', height: '18px', verticalAlign: 'middle' }} />

<b className="purple">  Microsoft - </b>
Did some cool stuff as a Software Development Intern (May 2022-August 2022) in Karnataka, India. Enhanced Microsoft Teams and boosted efficiency by 10%! Dabbled in TypeScript, React.js, GraphQL, Angular, and Azure.
<br/>
<br/>
<img src={pcclogo} alt="PCC Logo" style={{ width: '20px', height: '20px', verticalAlign: 'middle' }} />

<b className="purple"> Pcc Softech Pvt. Ltd. - </b> Worked as a Software Development Intern in Delhi (Aug 2021 - Jan 2022). Amped up <b className="purple">T-Mobile’s</b> portal and made data analysis a breeze for users.
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
