import React, { Component } from 'react';
import './App.css';
import Messages from './Messages'

const Message = ({email}) => {
  return (

    <div className="single-email-container">
      <div className="single-email" id={email.id}>
        <div className="email-subject">
          <h6>{email.subject}</h6>
        </div>
        <div className="email-read">
          <h6>{email.read}</h6>

        </div>
        <div className="email-starred">
          <h6>{email.starred}</h6>
        </div>
        <div className="email-subject">
          <h6></h6>
        </div>
        <div className="email-subject">
          <h6></h6>
        </div>
      </div>
    </div>
  );
}

export default Message;
