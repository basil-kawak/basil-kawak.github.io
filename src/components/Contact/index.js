import React from 'react'
import './style.css'
import formImg from './Img/form-img.png'
// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// Animate
import styled, { keyframes } from 'styled-components';
import FadeInLeft from 'react-animations/lib/fade-in-left'
import FadeInRight from 'react-animations/lib/fade-in-right'
// For forwarding the email to my Gmail account
import emailjs from 'emailjs-com';

export default function Contact() {

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('default_service', 'template_m9WHqkCF', e.target, 'user_o2MT1sW45pPKzFO4jhOwy')
            .then((result) => {
                alert("Thank you, Your messeage have been sent");
                document.forms["myForm"].reset();
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    const FadeInLeftAnimation = keyframes`${FadeInLeft}`;
    const FadeInLeftDiv = styled.div`
        animation:  2s ${FadeInLeftAnimation};
    `;

    const FadeInRightAnimation = keyframes`${FadeInRight}`;
    const FadeInRightDiv = styled.div`
        animation:  2s ${FadeInRightAnimation};
    `;

    return (

        <>
            <Container className="form">
                <div className="text-center section-caption">
                    <h1 className="section-title pt-5 pb-3">Reach Out to me!</h1>
                    <p className="lead w-75 m-auto pb-4 section-p">I am available on almost every social media. You can always message me, discuss a project or just want to say hi? MY INBOX IS OPEN FOR ALL.</p>
                </div>
                <Row className="flex-column-reverse flex-lg-row">
                    <Col md={6}>
                        <FadeInLeftDiv>
                            <form name="myForm" id="contact-form" onSubmit={sendEmail}>
                                <input required placeholder="Your name" type="text" name="user_name" className="form-control costuom-form mb-3 shadow-none"></input>
                                <input required placeholder="Your email" type="email" name="user_email" className="form-control costuom-form mb-3 shadow-none"></input>
                                <textarea required style={{ resize: "none" }} placeholder="Your message" name="message" rows="4" className="form-control md-textarea costuom-form mb-3 shadow-none"></textarea>
                                <button type="submit" value="Send" className="btn btn-outline-primary btn-form my-3 py-2 px-5 btn-block">Send</button>
                            </form>
                        </FadeInLeftDiv>
                    </Col>
                    <Col md={6}>
                        <FadeInRightDiv>
                            <img src={formImg} alt="" className="img-fluid m-auto d-block"></img>
                        </FadeInRightDiv>
                    </Col>
                </Row>
            </Container>
        </>
    );
}