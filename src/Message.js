import React, { Component } from 'react';
import './App.css';
import Messages from './Messages'

const Message = (props) => {
  let starHandler = () => {
    props.handleStar(props.email.id)
  }

  let checkHandler = () => {
    props.handleCheckbox(props.email.id)
  }

  let subject, read, starred, selected, labels, id;

  ({subject, read, starred, selected, labels, id} = props.email)

  let labelSpans = props.email.labels.map((label, idx) => {
    return <span className="label label-warning" key={idx}>{label}</span>
  })

  return (
  //     <div className="col-xs-2">
  //       <i className={this.props.email.starred ? "star fa fa-star" : "star-fa fa-star-o"} onClick={this.props.handleStar(this.id)}></i>
  //     </div>
  //   </div>
  // </div>
  // <div className="col-xs-11">
  // <span className="label label-warning">dev</span>    <a href="#">
  //     {this.props.emailsubject}
  //   </a>
  // </div>
// </div>
        // </div>
<div className={props.email.selected ? "row message selected" : props.email.read ? "row message read" : "row message unread"}>
  <div className="col-xs-1">
    <div className="row">
      <div className="col-xs-2" checked={props.handleCheckbox(props.email.id)}>
        {props.email.selected ? <input type="checkbox" checked/> : <input type="checkbox"/>}
      </div>
      <div className="col-xs-2">
        // <i className={props.email.starred ? "star fa fa-star" : "star-fa fa-star-o"} onClick={props.handleStar(props.email.id)}></i>
      </div>
    </div>
  </div>
  <div className="col-xs-11">
    <a href="#">
      {props.email.subject}
    </a>
  </div>
</div>
  );
}

export default Message;
