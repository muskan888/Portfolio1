import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import student from "../../Assets/Projects/student.png";
import explorehub from "../../Assets/Projects/explorehub.png";
import connectsphere from "../../Assets/Projects/connectsphere.png";
import documingle from "../../Assets/Projects/documingle.png";
import chatneuron from "../../Assets/Projects/chatneuron.png";
import instantpay from "../../Assets/instantpay.png";
import transfer from "../../Assets/transfer.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={instantpay}
            
              isBlog={false}
              title="Instant pay"
              description="Instant Pay is a web application that allows users to add money to their wallet and make payments to others using banking APIs. The application is built with Next.js, Express, turboRepo, PostGresql, Docker23 and provides a seamless user experience for managing transactions.
             
Add money to your wallet using banking APIs.
Transfer money to other users securely.
Real-time transaction updates.
User authentication and authorization.
Responsive design with Tailwind CSS."
              ghLink="https://github.com/muskan888/Instant-Pay"
              demoLink="https://github.com/muskan888/Instant-Pay"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatneuron}
              isBlog={false}
              title="Enhanced Chatgpt-chatNeuron"
              description="A better version of chat gpt!, Ask anything and get better reponses than chatGpt.With ChatNeuron, built with OpenAI API, React.js and Express. Users have the flexibility to choose from various OpenAI models, enabling fine-tuned conversations based on different model strengths and capabilities."
              ghLink="https://github.com/muskan888/chatNeuron-enhanced-ChatGpt-"
              demoLink="https://github.com/muskan888/chatNeuron-enhanced-ChatGpt-"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={connectsphere}
              isBlog={false}
              title="Connect Sphere"
              description="Dynamic communication platform that enables real-time video and voice calling, integrated with a chat feature for persistent messaging. Built with MongoDB, Angular, React.js, Node.js"
              ghLink="https://github.com/muskan888/ConnectSphere"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={explorehub}
              isBlog={false}
              title="Explore Hub"
              description="A comprehensive platform for booking and managing tours, providing users with detailed itineraries, payment options, and customer reviews."
              ghLink="https://github.iu.edu/ishpuri/ExploreHub-Frontend"
              demoLink="https://travel-guide-app-i1tf.vercel.app/home"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={documingle}
              isBlog={false}
              title="DocuMingle"
              description="A versatile online platform for document creation, editing, and collaboration, allowing multiple users to work on documents simultaneously."
              ghLink="https://github.com/muskan888/DocuMingle"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={student}
              isBlog={false}
              title="Student Performance Analysis"
              description="Student performance prediction by adopting a three-tier classification to identify key, enhancing Multinomial LR with Genetic Algorithm optimization."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

        

   
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
