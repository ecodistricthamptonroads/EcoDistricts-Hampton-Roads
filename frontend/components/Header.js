import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { logout } from '../actions/index';
import logo from '../assets/images/logo.png';
import Land from './Land';

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
      <Navbar collapseOnSelect bg="light" expand="lg">
        <Navbar.Brand href="/">Eco District Hampton Roads</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item>
              <Nav.Link eventKey="1" as={Link} to="/">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="2" as={Link} to="/news">
                News
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="3" as={Link} to="/issues">
                Report an Issue
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="4" as={Link} to="/surveys">
                Surveys
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="5" as={Link} to="/opportunities">
                Jobs/Education
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="6" as={Link} to="/recognition">
                Recognition
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="7" as={Link} to="/projectstatus">
                Project Status
              </Nav.Link>
            </Nav.Item>
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
