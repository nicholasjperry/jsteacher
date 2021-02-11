import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link, animateScroll as scroll } from "react-scroll";
//import {Redirect } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Container className="full-page align-self-center">
                    <Row className="align-self-center">
                        <Col>
                            <h2 className="page-Heading">
                                BootcampLite
                        </h2>
                            <div className="copy-text">
                                <p >BootcampLite is a simple, fun and easy coding playground that allows the user
                                to test and enhance their coding skills with a series of fun and dynamic problems that make coding cool.
                            </p>
                            </div>
                            <Link to="problems"><button className="app-button">Let's Go!</button></Link>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default Home