
import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Tasks } from '../shared/Problems';


class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.showUser = this.showUser.bind(this);
    this.state = {
      TASKS: Tasks,
      username: ''
    };
  }

  handleChange = event => {
    this.setState({ username: event.target.value });
  };
  showUser() {
    if (this.state.username.replace(/\s/g, "") === "badassbitch") {
      alert('You passed!');
    }
    else {
      alert
        ('You failed!!');
    }
  }

  render() {
    return (
      <React.Fragment>
      </React.Fragment>
    );
  }
}

export default TextEditor;

