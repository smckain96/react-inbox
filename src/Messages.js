import React, { Component } from 'react';
import './App.css';
import Message from'./Message';

class Messages extends Component {
  render(props) {
    console.log(this.props)
    const message = this.props.emails.map((email, i) =>{
      return <Message key={i} email={email} handleStar={this.props.handleStar} handleCheckbox = {this.props.handleCheckbox}/>
      }
    )
    return (
      <div>{message}</div>
    );
  }
}

export default Messages;
