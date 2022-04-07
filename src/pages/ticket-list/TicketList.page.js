import React, { useEffect, useState } from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp'
import { SearchForm } from '../../components/search-form/SearchForm.comp'
import { TicketTable } from '../../components/ticket-table/TicketTable.comp'
import tickets from '../../assets/dummy/dummy-tickets.json'

export const TicketList = () => {
    const [str,setStr] = useState("");
    const [dispTicket,setDispTicket] = useState(tickets)

    useEffect(()=>{},[str,dispTicket])

    const handleOnChange = (e) => {
        const {value} = e.target;
        setStr(value);
        searchTicket(value);
   }

    const searchTicket = (sttr) => {
        const displayTicket = tickets.filter(item => item.Subject.toLowerCase().includes(sttr.toLowerCase()))     
        setDispTicket(displayTicket);
    }
  return (
    <Container>
        <Row>
            <Col>
                <PageBreadcrumb page="Ticket List"/>
            </Col>
        </Row>
        <Row className='mt-3'>
            <Col>
                <Button >Add New Ticket</Button>
            </Col>
            <Col className="text-right">
                <SearchForm handleOnChange={handleOnChange} str={str}/>
            </Col>
        </Row>
        <hr/>
        <Row>
            <Col>
                <TicketTable TableData={dispTicket}/>
            </Col>
        </Row>
    </Container>
  )
}
