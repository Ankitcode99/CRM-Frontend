import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import logo from '../../assets/img/logo.png'
import { LinkContainer } from 'react-router-bootstrap'
import {useHistory} from 'react-router-dom'

export const Header = () => {
  const history = useHistory();

  const logMeOut = () => {
    history.push('/')
  }
  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="md">
       <Navbar.Brand style={{"paddingLeft":"10px"}}>
           <img src={logo} alt="logo" width="60px" height="40px"/>
       </Navbar.Brand>
       <Navbar.Toggle aria-controls="basic-navbar-nav"/>
       <Navbar.Collapse id="basic-navbar-nav"> {/** This helps creating a responsive nav bar */}
           <Nav className="ml-auto" style={{"marginLeft":"auto","paddingRight":"20px"}}>
              <LinkContainer to="/dashboard">
                <Nav.Link>Dashboard</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/tickets">
                <Nav.Link>Tickets</Nav.Link>
              </LinkContainer> 
              <LinkContainer onClick={logMeOut} to='/'>
                <Nav.Link>Logout</Nav.Link>
              </LinkContainer>
           </Nav>
       </Navbar.Collapse>
    </Navbar>
  )
}
