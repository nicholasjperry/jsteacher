import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

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
                            <p>Enhance your coding skills through a series of challenges!</p>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default Home;