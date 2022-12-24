import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function MyNavbar() {
    return (
        <Navbar bg="light" expand="lg">
            <Link to="/main">
                <div className="ps-4">
                    <Navbar.Brand href="#main">⛏️ Tool Box</Navbar.Brand>
                </div>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {/*<Link to="/profile">*/}
                    {/*    <Nav.Link href="#profile">Profile</Nav.Link>*/}
                    {/*</Link>*/}
                    <Link to="/hash">
                        <Nav.Link href="#hash">Hash</Nav.Link>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNavbar
