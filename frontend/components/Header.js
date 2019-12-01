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

class Header extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  componentDidMount() {
    this.props.fetchUser();
  }

  isLoggedIn() {
    switch (this.props.user) {
      case null:
        return 'still deciding';
      case false:
        return <a href={'/api/auth/google/get'}>log in</a>;
      default:
        return <a href={'/api/auth/logout'}>log out</a>;
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
    user: state.login.user,
    loggedIn: state.login.loggedIn
  };
};

function mapDispatchToProps() {
  return {
    fetchUser: fetchUser
  };
}

export default connect(mapStateToProps, mapDispatchToProps())(Header);
