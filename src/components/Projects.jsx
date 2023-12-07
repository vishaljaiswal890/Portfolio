import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import Moviepic from "../assets/img/movix_app.png";
import YouTubePic from "../assets/img/youtube_clone.png";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";
import "./Projects.css";
const Projects = () => {
  const projects = [
    {
      title: "Movix-Appliation",
      // description:
      //   "Discover movies, watch trailers, sort, save, and enjoy - all in one app.",
      imgUrl: Moviepic,
    },
    {
      title: "You-tube-clone",
      // description:
      //   "Share, explore, and engage with a world of videos on your own personalized YouTube clone.",
      imgUrl: YouTubePic,
    },
    {
      title: "You-tube-clone",
      // description:
      //   "Share, explore, and engage with a world of videos on your own personalized YouTube clone.",
      imgUrl: YouTubePic,
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
                    dolorum nesciunt nam, optio sint nostrum, quo non
                    dignissimos eveniet illo cumque, accusantium qui. Dolore
                    voluptatem blanditiis nam perferendis illum deleniti.
                  </p>
                  <Tab.Container id="project-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab one</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab Two</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab Three</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                      <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

export default Projects;
