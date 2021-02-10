import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { Navbar, Container, Button } from 'reactstrap';

class NavBar extends Component {
    render() {
        return (
            <Container>
                <Navbar color="dark" fixed="top">
                    <Link href="#" to="home" className="text-light">Home </Link>
                    <Link href="#" to="about" className="text-light">About Us </Link>
                    <Button>    
                        <Link href="#" to="problems" className="text-light">Try App</Link>
                    </Button>
                </Navbar>
            </Container>
        );
    }
}

export default NavBar;