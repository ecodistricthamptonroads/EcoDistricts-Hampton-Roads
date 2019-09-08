import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/images/logo.png';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  isLoggedIn() {
    if(this.props.loggedIn === false) {
      return <Link to={'/login'}> login </Link>
    } else {
      return <div> Hi {this.props.username} </div>
    }
  }
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Eco District Hampton Roads</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="news">News</Nav.Link>
            <Nav.Link href="issues">Report an Issue</Nav.Link>
            <Nav.Link href="surveys">Surveys</Nav.Link>
            <Nav.Link href="opportunities">Jobs/Education</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        { this.isLoggedIn() }
      </Navbar>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.login.username,
    loggedIn: state.login.loggedIn
  }
};

export default connect(mapStateToProps)(Header);
