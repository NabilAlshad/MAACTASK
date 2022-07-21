import React from 'react'
import { Button, Container, Navbar } from 'react-bootstrap';
import Logo from '../../Assets/FieldX.png';
export default function Menu() {
    return (
        <Navbar className='navbar'>
            <Container>
                <Navbar.Brand href="#home"><img alt="logo" src={Logo}></img></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text >
                        <Button className="me-3" id="login-button">Login</Button>
                        <Button id="register-button" className="bg-transparent">Register</Button>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
