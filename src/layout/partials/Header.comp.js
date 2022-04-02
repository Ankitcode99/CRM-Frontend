import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import logo from '../../assets/img/logo.png'

export const Header = () => {
  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="md">
       <Navbar.Brand style={{"paddingLeft":"10px"}}>
           <img src={logo} alt="logo" width="60px" height="40px"/>
       </Navbar.Brand>
       <Navbar.Toggle aria-controls="basic-navbar-nav"/>
       <Navbar.Collapse id="basic-navbar-nav"> {/** This helps creating a responsive nav bar */}
           <Nav className="ml-auto" style={{"marginLeft":"auto","paddingRight":"20px"}}>
               <Nav.Link href="/dashboard">Dashboard</Nav.Link>
               <Nav.Link href="/tickets">Tickets</Nav.Link>
               <Nav.Link href="/logout">Logout</Nav.Link>
           </Nav>
       </Navbar.Collapse>
    </Navbar>
  )
}
