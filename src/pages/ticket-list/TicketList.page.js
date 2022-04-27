import React, { useEffect } from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp'
import { SearchForm } from '../../components/search-form/SearchForm.comp'
import { TicketTable } from '../../components/ticket-table/TicketTable.comp'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {fetchAllTickets} from './ticketsAction'

export const TicketList = () => {

    const dispatch = useDispatch()

    
    useEffect(()=>{
        dispatch(fetchAllTickets())
    },[dispatch])

    

    
  return (
    <Container>
        <Row>
            <Col>
                <PageBreadcrumb page="Ticket List"/>
            </Col>
        </Row>
        <Row className='mt-3'>
            <Col>
                <Link to="/add-ticket"><Button >Add New Ticket</Button></Link>
            </Col>
            <Col className="text-right">
                <SearchForm/>
            </Col>
        </Row>
        <hr/>
        <Row>
            <Col>
                <TicketTable/>
            </Col>
        </Row>
    </Container>
  )
}
