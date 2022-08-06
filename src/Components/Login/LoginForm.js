import React from 'react'
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
export default function LoginForm() {
    return (
        <Form className="login-form">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter your id" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>

            <p>Don't have any account <Link to="/signUp">Sign up</Link>  </p>
        </Form>

    )
}
