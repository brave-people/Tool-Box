import React from 'react'
import { Container, Col, Navbar } from 'react-bootstrap'

function Footer() {
    return (
        <Navbar fixed="bottom" bg="light" variant="light" style={{ height: '70px' }}>
            <Container>
                <Col>
                    <p className="text-center mb-0">⛏️ WEB TOOL BOX</p>
                </Col>
            </Container>
        </Navbar>
    )
}

export default Footer
