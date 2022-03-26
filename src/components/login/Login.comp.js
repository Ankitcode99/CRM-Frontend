import React, {useState} from 'react'
import PropTypes from 'prop-types';
import {Container, Row, Col, Form, Button} from 'react-bootstrap'

export const Login = ({handleOnChange, email, pass, handleSubmit, formSwitch}) => {

  return (
    <Container>
        <Row>
            <Col>
                <h1>Client Login</h1>
                <hr/>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Email ID</Form.Label>
                        <Form.Control 
                            type="email" 
                            value={email} 
                            name="email" 
                            placeholder="Enter email" 
                            onChange={handleOnChange} 
                            required 
                        />
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            name="password" 
                            style={{"width":"350px"}}
                            onChange={handleOnChange}
                            value={pass} 
                            placeholder="Password" 
                            required
                        />
                    </Form.Group>
                    
                    <Button type="submit" className="mb-3 mt-2">Login</Button>
                </Form>
            </Col>
        </Row>
        <Row>
            <Col>
                <a href='#!' onClick={()=>formSwitch("reset")}>Forgot Password?</a>
            </Col>
        </Row>
    </Container>
  )
}


Login.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    formSwitch: PropTypes.func.isRequired
}