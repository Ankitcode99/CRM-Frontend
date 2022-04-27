import React, {useState} from 'react'
import PropTypes from 'prop-types';
import {Container, Row, Col, Form, Button, Spinner, Alert } from 'react-bootstrap'
import {loginFailure, loginPending, loginSuccess} from './loginSlice'
import {useDispatch, useSelector} from 'react-redux'
import { userLogin } from '../../api/userApi';
import { getUserProfile } from '../../pages/dashboard/userAction';
const {useHistory} = require('react-router-dom')

export const Login = ({ formSwitch}) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const {isLoading, isAuth, error} = useSelector(state => state.login);

    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleOnChange = (e)=>{
        const {name, value} = e.target;
        switch(name){
        case 'email':setEmail(value);
        break;
        case 'password':setPassword(value);
        break;
        default:break;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!email || !password){
        return alert("Please fill up all the fields")
        }

        dispatch(loginPending())

        try {
            const isAuth = await userLogin({email, password})

            if(isAuth.status === 'error'){
                return dispatch(loginFailure(isAuth.message))
            }
            dispatch(loginSuccess())
            dispatch(getUserProfile())
            history.push('/dashboard')
        } catch (error) {
            dispatch(loginFailure(error.message))
        }

    }

  return (
    <Container>
        <Row>
            <Col>
                <h1>Client Login</h1>
                <hr/>
                {error && <Alert variant="danger">{error}</Alert>}
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
                            value={password} 
                            placeholder="Password" 
                            required
                        />
                    </Form.Group>
                    
                    {!isLoading && <Button type="submit" className="mb-3 mt-2">Login</Button>}
                    {isLoading && <Spinner animation="border" variant="primary" className='mb-3 mt-2'/>}
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
    formSwitch: PropTypes.func.isRequired
}