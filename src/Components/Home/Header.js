import React from 'react'
import { Button, Container } from 'react-bootstrap'
import Tablet from '../../Assets/tablet 1.png';

export default function Header() {
    return (
        <Container className="header">
            <div className="header-title"><h3>Analytics that transform your product inside-out</h3></div>
            <div className="header-button mt-3">
                <Button className="me-4" id="demo-button">Request for Demo</Button>
                <Button id="download-button">Download</Button>
            </div>
            <div className="header-image mt-5">
                <img alt="header_picture" src={Tablet}></img>
            </div>
        </Container>
    )
}
