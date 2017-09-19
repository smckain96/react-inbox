import React, { Component } from 'react';
import './App.css';
import Messages from './Messages'

const Message = ({email}) => {
  starHandler = () => {
    this.props.handleStar(this.props.email.id)
  }

  checkHandler = () => {
    this.props.handleCheckbox(this.props.email.id)
  }

  let subject, read, starred, selected, labels, id;

  ({subject, read, starred, selected, labels, id} = this.props.email)

  let labelSpans = labels.map((label, idx) => {
    return <span className="label label-warning" key={idx}>{label}</span>
  })

  return (
    <div className={selected ? "row message selected" : read ? "row message read" : "row message unread"}>
      <div className="message">
        <div className="row message unread">
        <div className="col-xs-1">
        <div className="row">
        <div className="col-xs-2" checked={this.checkHandler}>
          {selected ? <input type="checkbox" checked/> : <input type="checkbox">}/>}

      </div>
      <div className="col-xs-2">
        <i className={starred ? "star fa fa-star" : "star-fa fa-star-o"} onClick={this.starHandler}></i>
      </div>
    </div>
  </div>
  <div className="col-xs-11">
  <span className="label label-warning">dev</span>    <a href="#">
      {subject}
    </a>
  </div>
</div>
        </div>
      </div>
  );
}

export default Message;
