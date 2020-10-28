import React from 'react'
import { Form, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <Container>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" placeholder="Username" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <div>Do not have an acount? <Link to="/signup">Register here</Link></div>
                </Form>
        </Container>
    )
}

export default SignIn

