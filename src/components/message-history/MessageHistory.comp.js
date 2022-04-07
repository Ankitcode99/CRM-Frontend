import React from 'react'
import PropTypes from 'prop-types'
import './message-history.style.css'

export const MessageHistory = ({msg}) => {
  if (!msg) return null 
  return msg.map((row,index)=>(
    <div key={index} className="message-history">
        <div className="send font-weight-bold text-secondary mt-3">
            <div className="sender"><b>{row.messageBy}</b></div>
            <div className="date">{row.date}</div>
        </div>
        <div className="message mt-3">{row.message}</div>
    </div>
  ))
}

MessageHistory.propTypes = {
    msg: PropTypes.array.isRequired
}