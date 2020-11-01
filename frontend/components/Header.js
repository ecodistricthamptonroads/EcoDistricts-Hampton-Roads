import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { logout } from '../actions/index';
import logo from '../assets/images/logo.png';
import Land from './Land';
import { fetchUser } from '../actions';
import '../../public/app.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchUser();
  }

  isLoggedIn() {
    switch (this.props.user) {
      case null:
        return 'still deciding';
      case false:
        return (
          <Nav.Item>
            <a href={'/api/auth/google/get'}>Admin? Log in here</a>
          </Nav.Item>
        );
      default:
        return (
          <Nav.Item>
            <a href={'/api/auth/logout'}>Log Out</a>
          </Nav.Item>
        );
    }
  }

  email() {
    if (this.props.user)
      return (
        <Nav.Item>
          <Nav.Link eventKey="8" as={Link} to="/email">
            Add Admin Email
          </Nav.Link>
        </Nav.Item>
      );
  }

  render() {
    return (
      <Navbar collapseOnSelect bg="light" expand="lg">
        <Navbar.Brand href="/">Eco District Hampton Roads</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item>
              <Nav.Link eventKey="1" as={Link} to="/about">
                About
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
                Jobs
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="6" as={Link} to="/resources">
                Resources
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="7" as={Link} to="/projectstatus">
                Projects
              </Nav.Link>
            </Nav.Item>
            {this.email()}
          </Nav>
          <Nav>{this.isLoggedIn()}</Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.login.user
  };
};

function mapDispatchToProps() {
  return {
    fetchUser: fetchUser
  };
}

export default connect(mapStateToProps, mapDispatchToProps())(Header);
