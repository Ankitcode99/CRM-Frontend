import {React,  useEffect,  useState} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { AddTicketForm } from '../../components/add-ticket-form/AddTicketForm.comp'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp'


const initialFormData = {
    subject: "",
    issueDate: "",
    detail: ""
}
export const AddTicket = () => {

   const [formData, setFormData] = useState(initialFormData)
   
    const handleOnChange = (e) => {
        const {name,value} = e.target;

        setFormData({
            ...formData,
            [name]:value
        })
    }

    const handleOnSubmit = (e) => {
        console.log('hi')
        e.preventDefault();
        console.log(formData);
        setFormData(initialFormData)
    }

  return (
    <Container>
        <Row>
            <Col>
                <PageBreadcrumb page="New Ticket"/>
            </Col>
        </Row>
        <Row>
            <Col>
                <AddTicketForm handleOnChange={handleOnChange} formDt={formData} handleOnSubmit={handleOnSubmit}/>
            </Col>
        </Row>
    </Container>
  )
}
