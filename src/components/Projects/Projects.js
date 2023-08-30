import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import Transx from "../../Assets/Projects/transx.png";
import Hezli from "../../Assets/Projects/Hezli.png";
import Forw from "../../Assets/Projects/Forw.png";

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
              imgPath={Hezli}
              isBlog={false}
              title="delivering articles App"
              description="Robust website for a prominent transport company utilizing React.js and Strapi. The design integrates intuitive user interfaces and seamless data management, enabling efficient booking and tracking of shipments."
              ghLink="https://github.com/Maryem01/TransportTransx"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Transx}
              isBlog={false}
              title="TransX App"
              description=" Build a user-friendly transport website that offers efficient and reliable transportation services, providing a seamless platform for customers to book and track shipments, ultimately redefining logistics convenience.
"
              ghLink="https://github.com/Maryem01/TransportTransx"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Forw}
              isBlog={false}
              title="Forward Sms App"
              description="Developed a Forward Message app using Flutter integrated with Strapi as a CMS for dynamic content management, this enables users to quickly and  forward messages to their contacts.ecipients with ease and efficiency."
              ghLink="https://github.com/Maryem01/TransportTransx"
              demoLink=""
            />
          </Col>

          {/*} <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={Transx}
              isBlog={false}
              title="TransX App"
              description="Built a user-friendly transport website that offers efficient and reliable transportation services"
              ghLink="https://github.com/Maryem01/TransportTransx"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={Transx}
              isBlog={false}
              title="Chat Application"
              description="React Native chat application, an innovative messaging platform that redefines communication. security and convenience are at the forefront of this modern messaging solution."
              ghLink="https://github.com/Maryem01/TransportTransx"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={Transx}
              isBlog={false}
              title="Social Media App"
              description="Replicated Instagram's allure with a clone app, demonstrating my React Native skills in recreating its captivating interface.."
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
  */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
