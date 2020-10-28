import React, { Component } from 'react';
import { SingleDatePicker } from 'react-dates';
import { connect } from 'react-redux';
import axios from 'axios'
import { Form, Button, Container } from 'react-bootstrap';
import {signup} from '../../actions/authActions';
import history from '../../history'

export class SignUp extends Component {
    state = {
        username: '',
        password: '',
        name: '',
        dob: null,
    }
    onChange =(field) => {
        return event => {
            console.log('signup', field, event.target.value)
            this.setState({[field]: event.target.value})
        }
    }
    onDateChange = (dob) => {
        if (dob) {
            this.setState({dob : dob})
        }
    }

    onFocusChange = ({ focused }) => {
        this.setState({ calendarFocused: focused})
    }

    onValidate = (e) => {
        e.prevenDefault()
    }
    onSignUp = () => {
        const payload = {
            username: this.state.username,
            password: this.state.password,
            name: this.state.name,
            dob: this.state.dob
        }
        axios({
            url: '/signup',
            method: 'POST',
            data: payload,
            withCredentials: true
        })
            .then((res) => {
                console.log('signup', res)
                history.pushState('/')
            })
            .catch((error) => console.log('Internet server error', error))
    }
    render() {
        return (
            <Container>
                <Form  onSubmit={this.onValidate}>
                    <Form.Group >
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Username"
                            autoFocus
                            value={this.state.username}
                            onChange={this.onChange('username')}
                        />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            autoFocus
                            value={this.state.password}
                            onChange={this.onChange('password')}
                        />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Name"
                            autoFocus
                            value={this.state.name}
                            onChange={this.onChange('name')}
                        />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Date of Birth</Form.Label>
                            <SingleDatePicker 
                                date={this.state.dob}
                                onDateChange={this.onDateChange}
                                focused={this.state.calendarFocused}
                                onFocusChange={this.onFocusChange}
                                numberOfMonths={1}
                                isOutsideRange={() => false}
                            />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={this.onSignUp}>
                        Submit
                    </Button>
                    </Form>
            </Container>
        )
    }
}

export default connect(null, { signup })(SignUp)
