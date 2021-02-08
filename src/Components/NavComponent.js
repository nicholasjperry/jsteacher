import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { Container, Row, Col } from 'reactstrap';
//import {Redirect } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col className="float-right">
                            <ul className="navList">
                                <Link to="home"><li> Home </li></Link>|
                                <Link to="about"><li> About us </li></Link>|
                                <Link to="problems"> <li> Try App </li></Link>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default NavBar;