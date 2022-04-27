import React from 'react'
import {Table} from 'react-bootstrap'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'


export const TicketTable = () => {
    const { searchTicketList, isLoading, error} = useSelector((state)=> state.tickets)

    if(isLoading){
        return <h3>Loading...</h3>
    }

    if(error){
        return <h2>{error}</h2>
    }

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
            {searchTicketList.length ? searchTicketList.map((row,index)=>{
                return <tr key={row._id}>
                    <td>{row._id}</td>
                    <td><Link to={`/ticket/${row.Id}`}>{row.subject}</Link></td>
                    <td>{row.status}</td>
                    <td>{row.openAt}</td>
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
