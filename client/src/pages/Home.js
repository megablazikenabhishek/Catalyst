import "./Home.css";

import React from "react";
import {Button, Col, Row} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

function Home() {
    return (
        <Row>
            <Col md={6} className="d-flex flex-direction-column align-items-center justify-content-center">
                <div className="greet">
                    <h1>Join the Entrepreneurial Revolution: Connect, Collaborate, Succeed</h1>
                    <p>Community App lets you connect with the world</p>
                    <LinkContainer to="/chat">
                        <Button variant="success">
                            Get Started <i className="fas fa-comments home-message-icon"></i>
                        </Button>
                    </LinkContainer>
                </div>
            </Col>
            <Col md={6} className="home__bg"></Col>
        </Row>
    );
}

export default Home;
