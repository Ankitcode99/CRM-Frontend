import React from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import './AddTicketForm.style.css'
import PropTypes from 'prop-types'

export const AddTicketForm = ({handleOnSubmit, handleOnChange, formDt}) => {
  return (
      <div className="add-new-ticket">
        <div className="form-holder">
            <Container>
                <Row>
                    <Col>
                    <h2>Create Ticket!</h2>
                    <hr/>
                    <Form onSubmit={handleOnSubmit}>
                        <Form.Group>
                            <Form.Label>Subject</Form.Label>
                            <Form.Control
                                name="subject"
                                minLength="3"
                                style={{"width":"350px"}}
                                value={formDt.subject}
                                onChange={handleOnChange}
                                placeholder="Enter subject here!"
                                required
                            />
                        </Form.Group>
                        <Form.Group className='mt-3'>
                            <Form.Label>Issue Found On</Form.Label>
                            <Form.Control  
                                name="issueDate"
                                type="date"
                                value={formDt.issueDate}
                                onChange = {handleOnChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className='mt-3'>
                            <Form.Label>Details</Form.Label>
                            <Form.Control 
                                as="textarea"
                                name="detail"
                                maxLength="100"
                                value={formDt.detail}
                                onChange={handleOnChange}
                            />
                        </Form.Group>

                        <Button type="submit" className='new-ticket-btn mt-4'>Submit</Button>
                    </Form>
                    </Col>
                </Row>
                {/* <Row className='mt-4'>
                    <Col>
                    <Button type="submit" className='new-ticket-btn'>Submit</Button>
                    </Col>
                </Row> */}
            </Container>
        </div>
      </div>
    
  )
}

AddTicketForm.propTypes = {
    handleOnSubmit: PropTypes.func.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    formDt: PropTypes.object.isRequired
}