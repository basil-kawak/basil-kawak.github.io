import React from "react";
import "./style.css";
// import AboutPic from "./Img/about.jpg"
// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// typed.js
import Typed from "react-typed";
import "react-typed/dist/animatedCursor.css";
// Animate
import styled, { keyframes } from "styled-components";
import FadeInLeft from "react-animations/lib/fade-in-left";
// import FadeInRight from 'react-animations/lib/fade-in-right'

export default function About() {
  const FadeInLeftAnimation = keyframes`${FadeInLeft}`;
  const FadeInLeftDiv = styled.div`
    animation: 2s ${FadeInLeftAnimation};
  `;

  // const FadeInRightAnimation = keyframes`${FadeInRight}`;
  // const FadeInRightDiv = styled.div`
  //   animation:  2s ${FadeInRightAnimation};
  // `;

  return (
    <>
      <div className="dodo">
        <Container className="d-flex flex-grow-1 align-items-center">
          <Row className="justify-content-md-center">
            <Col lg={8} md={12}>
              <FadeInLeftDiv>
                <div className="hey-content">
                  <h1 className="mb-0">Hi, I'm Basil Al-Isa</h1>
                  <p className="mt-0">
                    <strong> Front End Developer</strong>
                  </p>
                </div>
                <p className="lead about-me-caption">
                  A passionate Software Developer with an experience of{" "}
                  <Typed
                    className="strongy"
                    strings={[
                      "JavaScript",
                      "Reactjs",
                      "and some other frameworks. ",
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                  />
                  <br></br>always thrive to work on end to end products which
                  develop sustainable and scalable social and technical systems
                  to create impact.
                </p>
                <span className="find-me">Get in Touch</span>
                <ul className="list-unstyled list-social-links">
                  <li className="d-inline-block m-3">
                    <a
                      href="https://github.com/basil-kawak/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <i className="fab fa-2x fa-github github"></i>
                    </a>
                  </li>
                  <li className="d-inline-block m-3">
                    <a
                      href="https://www.linkedin.com/in/basil-m-al-isa-88323876/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <i className="fab fa-2x fa-linkedin linkedin"></i>
                    </a>
                  </li>
                  <li className="d-inline-block m-3">
                    <a
                      href="https://www.facebook.com/basil.isa.927/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <i className="fab fa-2x fa-facebook facebook"></i>
                    </a>
                  </li>
                  <li className="d-inline-block m-3">
                    <a
                      href="http://instagram.com/basilkawak"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <i className="fab fa-2x fa-instagram instagram"></i>
                    </a>
                  </li>
                </ul>
                <div className="btns-container mt-3">
                  <a
                    className="btn btn-main py-2 px-5 mr-3 btn-lg"
                    href="mailto:basilkawak@gmail.com?&subject=Big%20News"
                  >
                    Contact Me
                  </a>
                  <a
                    className="btn btn-outline-primary ml-xl-2 py-2 px-5  btn-lg"
                    href="./Resume"
                  >
                    See My Resume
                  </a>
                </div>
              </FadeInLeftDiv>
            </Col>
            {/* <Col lg={6} md={12}>
              <FadeInRightDiv>
                <img src={AboutPic} alt="" className="img-fluid devloper-img"></img>
              </FadeInRightDiv>
            </Col> */}
          </Row>
        </Container>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
    </>
  );
}
