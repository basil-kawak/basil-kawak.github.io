import React from "react";
import "./style.css";
import Pro1 from "./img/project1.png";
import Pro2 from "./img/project2.png";
import Pro3 from "./img/project3.png";
import Pro4 from "./img/project4.png";
import Pro5 from "./img/project5.png";
// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// Animate
import styled, { keyframes } from "styled-components";
import FadeInUp from "react-animations/lib/fade-in-up";

export default function Projects() {
  const FadeInUpAnimation = keyframes`${FadeInUp}`;

  const FadeInUpDiv1s = styled.div`
    animation: 1s ${FadeInUpAnimation};
  `;

  const FadeInUpDiv2s = styled.div`
    animation: 2s ${FadeInUpAnimation};
  `;
  return (
    <>
      <Container>
        <div className="text-center section-caption">
          <h1 className="section-title pt-5 pb-3">PORTFOLIO</h1>
          <p className="lead w-75 m-auto pb-4 section-p">
            Check Out My Latest Projects.
          </p>
        </div>
        <Row>
          {/* Project 1 */}
          <Col lg={6} className="mb-3">
            <FadeInUpDiv1s>
              <div className="hover hover-5 text-white rounded">
                <img className="img-fluid" src={Pro1} alt="project"></img>
                <div className="hover-overlay"></div>
                <div className="hover-5-content">
                  <h4 className="hover-5-title text-uppercase text-center text-white text-bold">
                    The Board Project
                  </h4>
                  <p className="lead porject-cption text-center text-white px-2">
                    The Board Project is a todo app one that can be used to
                    implement Kanban to manage work at a personal or
                    organizational level. Technologies: ReactJS, Firebase,
                    Bootstrap.
                  </p>
                  <a
                    className="project-link text-center"
                    href="https://basil-kawak.github.io/kanban-todo-app/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <i className="fas fa-external-link-alt fa-2x text-white"></i>
                  </a>
                </div>
              </div>
            </FadeInUpDiv1s>
          </Col>
          {/* Project 2 */}
          <Col lg={6} className="mb-3">
            <FadeInUpDiv2s>
              <div className="hover hover-5 text-white rounded">
                <img className="img-fluid" src={Pro2} alt="project"></img>
                <div className="hover-overlay"></div>
                <div className="hover-5-content">
                  <h4 className="hover-5-title text-uppercase text-center text-white">
                    Movie App
                  </h4>
                  <p className="lead porject-cption text-center text-white px-2">
                    A robustly featured and continuously developed React
                    application, utilizing The Movie Database API to display
                    movie data.
                  </p>
                  <a
                    className="project-link text-center"
                    href="https://basil-kawak.github.io/movie-project/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <i className="fas fa-external-link-alt fa-2x text-white"></i>
                  </a>
                </div>
              </div>
            </FadeInUpDiv2s>
          </Col>
          {/* Project 3 */}
          <Col lg={6} className="mb-3">
            <FadeInUpDiv2s>
              <div className="hover hover-5 text-white rounded">
                <img className="img-fluid" src={Pro3} alt="project"></img>
                <div className="hover-overlay"></div>
                <div className="hover-5-content">
                  <h4 className="hover-5-title text-uppercase text-center text-white">
                    My Portfolio
                  </h4>
                  <p className="lead porject-cption text-center text-white px-2">
                    {" "}
                    A simple Portfolio website built with React, Bootstrap, and
                    Css Animations. Hosted using github pages (gh-pages).
                  </p>
                  <a
                    className="project-link text-center"
                    href="https://basil-kawak.github.io/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <i className="fas fa-external-link-alt fa-2x text-white"></i>
                  </a>
                </div>
              </div>
            </FadeInUpDiv2s>
          </Col>

          {/* Project 4 */}
          <Col lg={6} className="mb-3">
            <FadeInUpDiv2s>
              <div className="hover hover-5 text-white rounded">
                <img className="img-fluid" src={Pro4} alt="project"></img>
                <div className="hover-overlay"></div>
                <div className="hover-5-content">
                  <h4 className="hover-5-title text-uppercase text-center text-white">
                    Suicide Detection and Prevention
                  </h4>
                  <p className="lead porject-cption text-center text-white px-2">
                    {" "}
                    Provide a quick and simple platform for suicide prevention
                    and mental health promotion.
                  </p>
                  <a
                    className="project-link text-center"
                    href="https://suicide-detection-prevention.netlify.app/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <i className="fas fa-external-link-alt fa-2x text-white"></i>
                  </a>
                </div>
              </div>
            </FadeInUpDiv2s>
          </Col>

          {/* Project 5 */}
          <Col lg={6} className="mb-3">
            <FadeInUpDiv2s>
              <div className="hover hover-5 text-white rounded">
                <img className="img-fluid" src={Pro5} alt="project"></img>
                <div className="hover-overlay"></div>
                <div className="hover-5-content">
                  <h4 className="hover-5-title text-uppercase text-center text-white">
                    Mad Libz App
                  </h4>
                  <p className="lead porject-cption text-center text-white px-2">
                    {" "}
                    In this project, we used HTML, CSS, and JS in unison in
                    order to create a variant of a Mad Libs game with the story.
                    Hosted using github pages (gh-pages).
                  </p>
                  <a
                    className="project-link text-center"
                    href="https://basil-kawak.github.io/mad-libs-project/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <i className="fas fa-external-link-alt fa-2x text-white"></i>
                  </a>
                </div>
              </div>
            </FadeInUpDiv2s>
          </Col>
        </Row>
      </Container>
    </>
  );
}
