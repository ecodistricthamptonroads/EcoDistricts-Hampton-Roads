import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { logout } from '../actions/index';
import logo from '../assets/images/logo.png';

class Header extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  isLoggedIn() {
    if (this.props.loggedIn === false) {
      return <Link to={'/login'}> login </Link>;
    } else {
      return (
        <div>
          <div> Hi {this.props.username} </div>
          <button onClick={this.logout}> Logout </button>
        </div>
      );
    }
  }

  logout() {
    this.props.logout();
  }

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Eco District Hampton Roads</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to={'/'}>Home</Link>
            <Nav.Link href="/news">News</Nav.Link>
            <Link to={'issues'}>Report an Issue</Link>
            <Link to={'surveys'}>Surveys</Link>
            <Link to={'recognition'}>Recognizing Residents</Link>
            <Nav.Link href="/opportunities">Jobs/Education</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {this.isLoggedIn()}
      </Navbar>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.login.username,
    loggedIn: state.login.loggedIn
  };
};

const mapDispatchToProps = (/* dispatch */) => {
  return {
    logout: logout
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Header);
