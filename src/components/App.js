import React, { Component } from 'react';
import Form from './form';
import './form.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';


class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Navbar bg="dark">
          <Navbar.Brand>
            <img
              src="./logo192.png"
              width="100"
              height="60"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Navbar>
        <div className="App-header">
          <Form />
        </div>
      </React.Fragment>
    );
  }
}

export default App;

// Email: ${email}
// Password: ${password}