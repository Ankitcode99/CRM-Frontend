import React, { useEffect, useState } from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp'
import tickets from '../../assets/dummy/dummy-tickets.json'
import { MessageHistory } from '../../components/message-history/MessageHistory.comp';
import { UpdateTicket } from '../../components/update-ticket/UpdateTicket.comp';

const ticket = tickets[0];

export const Ticket = () => {

  const [message,setMessage] = useState("");

  useEffect(()=>{},[message]);
  const handleOnChange = (e)=>{
    const {value} = e.target;
    setMessage(value);
  }

  const handleOnSubmit = () => {
    alert('Form submitted!');
  }

  return (
      <Container>
          <Row>
              <Col>
                <PageBreadcrumb page="Ticket"/>
              </Col>
          </Row>
          <Row>
              <Col className='font-weight-bold text-dark'>
                <div className="subject"><b>Subject:</b> {ticket.Subject}</div>
                <div className="date"><b>Issue Date:</b> {ticket.OpenDate}</div>
                <div className="status"><b>Status:</b> {ticket.Status}</div>
              </Col>
              <Col className="text-right">
                <Button variant="outline-danger" >Close Ticket</Button>
              </Col>
          </Row>
          <Row className="mt-3">
              <Col>
              <MessageHistory msg={ticket.history}/>
              </Col>
          </Row>
          <hr/>
          <Row className="mt-3">
            <Col>
            <UpdateTicket msg={message} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit}/>
            </Col>
          </Row>
      </Container>
  )
}
