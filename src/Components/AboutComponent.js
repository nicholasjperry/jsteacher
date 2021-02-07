import React, { Component } from 'react';
import { Developers } from '../shared/Developers';
import { Card, CardTitle, CardImg, CardImgOverlay, Col, Container, Row } from 'reactstrap';
//import {Redirect } from 'react-router-dom';

class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            developers: Developers
        };
    }
    render() {
        const showDevs = this.state.developers.map(dev => {
            return (
                <Col xs={12} sm={12} md={4}>
                    <Card>
                        <CardImg width="10%" src={dev.image} alt={dev.name} />

                        <CardImgOverlay>
                            <CardTitle>{dev.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>

                    <div>
                        <p>{dev.bio}</p>
                        <p>{dev.link1}</p>
                        <p>{dev.link2}</p>
                    </div>
                </Col>
            );
        });
        return (
            <React.Fragment>
                <div className="full-page">
                    <div>
                        <h2 className="page-Heading">
                            About Us
                        </h2>
                        <p>This project was made by a small group of hardworking developers from Nucamp Bootcamp</p>
                    </div>
                    <Container>
                        <Row>
                            {showDevs}
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default About