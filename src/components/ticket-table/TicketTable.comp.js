import React from 'react'
import {Table} from 'react-bootstrap'
import PropTypes from 'prop-types'

export const TicketTable = ({TableData}) => {
    
  return (
    <Table striped bordered hover>
        <thead>
            <tr>
            <th>ID</th>
            <th>Subject</th>
            <th>Status</th>
            <th>Opened Date</th>
            </tr>
        </thead>
        <tbody>
            {TableData.length ? TableData.map((row,index)=>{
                return <tr key={row.Id}>
                    <td>{row.Id}</td>
                    <td>{row.Subject}</td>
                    <td>{row.Status}</td>
                    <td>{row.OpenDate}</td>
                </tr>
            }) 
             : 
            <tr>
                <td colSpan='4' className='text-center'>No ticket to show!</td>
            </tr>   
            }

            {/* <tr>
                <td>1</td>
                <td>SSL Issue</td>
                <td>Client Response Pending</td>
                <td>2022-04-02</td>
            </tr>
            */}
        </tbody>
    </Table>
  )
}

TicketTable.propTypes = {
    TableData: PropTypes.array.isRequired
}