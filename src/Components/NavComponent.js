import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { Navbar, Container } from 'reactstrap';

class MainNav extends Component {
    render() {
        return (
            <Navbar color="success" sticky="top" className="float-right">
                <Link href="#" to="home" className="text-light">Home |</Link>
                <Link href="#" to="about" className="text-light"> About Us |</Link>
                <Link href="#" to="problems" className="text-light"> Problems</Link>
            </Navbar>
        );
    }
}

export default MainNav;