import React, {useState} from 'react'
import PropTypes from 'prop-types';
import {Container, Row, Col, Form, Button} from 'react-bootstrap'

export const ResetPassword = ({handleOnChange, email, handlePasswordReset, formSwitch}) => {

  return (
    <Container>
        <Row>
            <Col>
                <h1>Reset Password</h1>
                <hr/>
                <Form onSubmit={handlePasswordReset}>
                    <Form.Group>
                        <Form.Label>Email ID</Form.Label>
                        <Form.Control 
                            type="email" 
                            value={email} 
                            name="email" 
                            style={{"width":"350px"}}
                            placeholder="Enter email" 
                            onChange={handleOnChange} 
                            required 
                        />
                    </Form.Group>
                                
                    <Button type="submit" className="mb-3 mt-2">Send Link!</Button>
                </Form>
            </Col>
        </Row>
        <hr/>
        <Row>
            <Col>
                <a href='#!' onClick={()=>formSwitch("login")}>Login Now?</a>
            </Col>
        </Row>
    </Container>
  )
}


ResetPassword.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    handlePasswordReset: PropTypes.func.isRequired,
    formSwitch: PropTypes.func.isRequired
}