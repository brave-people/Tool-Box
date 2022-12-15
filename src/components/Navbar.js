import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

function MyNavbar() {
    return (
        <Navbar bg="light" expand="lg">

            <Navbar.Brand href="#home">My Website</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    )
}

export default MyNavbar
