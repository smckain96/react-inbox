import React, { Component } from 'react';
import './App.css';
import Message from'./Message';

class Messages extends Component {
  render() {
    const message = this.props.emails.map((email, i) =>{
      console.log(email)
      return <Message email={email}/>
      }
    )

    return (
      <div>{message}</div>
    );
  }
}

export default Messages;
