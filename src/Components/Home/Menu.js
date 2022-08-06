import React from 'react'
import { Button, Container, Navbar } from 'react-bootstrap';
import Logo from '../../Assets/FieldX.png';
import { Link } from 'react-router-dom'
export default function Menu() {
    return (
        <Navbar className='navbar'>
            <Container>
                <Navbar.Brand href="#home"><Link to='/'><img alt="logo" src={Logo}></img></Link></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text >
                        <Button className="me-3" id="login-button"><Link to="/login" >Login</Link></Button>
                        <Button id="register-button" className="bg-transparent"><Link to='/signUp'>Register</Link></Button>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
