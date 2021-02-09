import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
// import { Route, NavLink, HashRouter } from 'react-router-dom';

class Problems extends Component {
    render() {
        return (
            <React.Fragment>
                <Container className="full-page">
                    <Row>
                        <Col>
                            <h2 className="page-Heading">
                                Learn about the javascript fundamentals via the problems below
                            </h2>

                            <Button>Try the App</Button>
                        </Col>
                    </Row>
                    <Row>

                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default Problems;