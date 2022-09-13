import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";

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
              isBlog={false}
              flag={2}
              title="Lung Cancer Detection and Segmentation"
              before="Working under "
              toBe="Prof. Vinay Chamola"
              after=" at BITS Pilani towards modifying HR-NET, 
              a CNN model, to work towards lung cancer detection and segmentation from CT Scans."
              toBelink="https://www.bits-pilani.ac.in/pilani/vinaychamola/profile"
              link="false"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Frontend Web Development Intern"
              flag={1}
              toBe='Carscan.ai'
              toBelink='https://www.carscan.ai/'
              description="Built a Configuration Dashboard in React and integrated REST APIs through which the product team can modify features of the web app allowing for quick customization of the web app as per client request."
              link="false"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Inter-BITS Sports Meet Website"
              description="A web app for player registration in 48 sporting events; includes a captain allotment
              portal and a team formation portal for 400+ teams across 5 campuses of BITS Pilani."
              link="https://bitssutechteam.github.io/InterBITS-Frontend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Auction Management System"
              description="A Course Project in Databse Systems simulating an Online Auction with the capability to handle multiple queries at the same time."
              link="https://github.com/sarang-sridhar/DBSProject.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="The Studyzone platform"
              description="A cross platform student productivity app for crowd sourcing academic documents
              with quality control via user provided feedback and ratings. The app includes 3000+
              verified documents to serve the academic needs of 5000+ students in BITS Pilani."
              link="https://studydeck.bits-sutechteam.org/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="The Taxicab Web Dashboard"
              description="A web dashboard for administrators of BITS Pilani’s affiliate taxicab service to analyze
              overall and individual cab ride statistics in real-time and offer students betterrates.
              This service has over 750 completed trips and helps 2500+ students"
              link="https://cab-admin.su-bitspilani.org/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
