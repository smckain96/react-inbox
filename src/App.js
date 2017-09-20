import React, { Component } from 'react';
import Messages from './Messages';
import Toolbar from './Toolbar';

class App extends Component {
  state = {
    emails: [
  {
    "id": 1,
    "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
    "read": false,
    "starred": true,
    "labels": ["dev", "personal"]
  },
  {
    "id": 2,
    "subject": "connecting the system won't do anything, we need to input the mobile AI panel!",
    "read": false,
    "starred": false,
    "selected": true,
    "labels": []
  },
  {
    "id": 3,
    "subject": "Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!",
    "read": false,
    "starred": true,
    "labels": ["dev"]
  },
  {
    "id": 4,
    "subject": "We need to program the primary TCP hard drive!",
    "read": true,
    "starred": false,
    "selected": true,
    "labels": []
  },
  {
    "id": 5,
    "subject": "If we override the interface, we can get to the HTTP feed through the virtual EXE interface!",
    "read": false,
    "starred": false,
    "labels": ["personal"]
  },
  {
    "id": 6,
    "subject": "We need to back up the wireless GB driver!",
    "read": true,
    "starred": true,
    "labels": []
  },
  {
    "id": 7,
    "subject": "We need to index the mobile PCI bus!",
    "read": true,
    "starred": false,
    "labels": ["dev", "personal"]
  },
  {
    "id": 8,
    "subject": "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!",
    "read": true,
    "starred": true,
    "labels": []
  }
]
  }
  handleStar = (id) => {
    let emails = this.state.emails;
    emails = emails.map(email => {
      if(email.id === id) {
        email.starred = !email.starred
      }
      return email;
    })
    this.setState({emails: emails})
  }

  handleCheckbox = (id) => {
    let emails = this.state.emails;
    emails = emails.map(email => {
      if(email.id === id) {
        email.selected = email.selected ? false : true
      }
      return email;
    })
    this.setState({emails: emails})
  }

  handleBulk = () => {
    let emails = this.state.emails;
    if(emails.every(isSelected)) {
      emails.selected = false;
    }
    emails = emails.map(email => {
      email.selected = true;
      return email;
    })
    this.setState({emails: emails})
  }

  render() {
    return (
      <div className="App">
        <div className="toolbar-container">
          <Toolbar handleBulk={this.handleBulk}/>
        </div>
        <div className="message-container">
            <Messages emails={this.state.emails} handleStar={this.handleStar} handleCheckbox={this.handleCheckbox} handleBulk = {this.handleBulk}/>
        </div>
      </div>
    );
  }
}

function isSelected(email) {
  return email.selected
}

export default App;
