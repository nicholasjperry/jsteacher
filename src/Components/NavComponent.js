import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { Navbar, Container, Button } from 'reactstrap';
import Problems from './ProblemsComponent';

class NavBar extends Component {
    render() {
        return (
            <Container>
                <Navbar color="dark" fixed="top">
                    <Link href="#" to="home" className="text-light">Home </Link>
                    <Link href="#" to="about" className="text-light">About Us </Link>
                    <Link href="#" to="problems">
                        <Button className="text-light">Try App</Button>
                    </Link>
                </Navbar>
            </Container>
        );
    }
}

export default NavBar;