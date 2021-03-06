import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import icon from "../assets/images/icon.png";
import brand from "../assets/images/Brand1.png";
import Land from "./Land";

import "../assets/stylesheets/app.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }
  componentDidMount() {}

  isLoggedIn() {
    switch (this.props.user) {
      case null:
        return "still deciding";
      case false:
        return (
          <Nav.Item>
            <a href={"/api/auth/google/get"}>Admin? Log in here</a>
          </Nav.Item>
        );
      default:
        return (
          <Nav.Item>
            <a href={"/api/auth/logout"}>Log Out</a>
          </Nav.Item>
        );
    }
  }

  email() {
    if (this.props.user)
      return (
        <Nav.Item>
          <Nav.Link eventkey="8" as={Link} to="/email">
            Add Admin Email
          </Nav.Link>
        </Nav.Item>
      );
  }

  render() {
    const CONTACT_US_LINK =
      "https://us4.list-manage.com/contact-form?u=51eb002c7ef49ac4bf7de17e2&form_id=c58d36b6f54bd9b975ec2607253190d2";
    return (
      <Navbar pullRight collapseOnSelect expand="lg">
        <Navbar.Brand href="/">
          <img id="navbar-logo" src={brand}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {/* <Nav className="mr-auto"> */}
            <NavDropdown
              onMouseEnter={() => {
                this.setState({ isOpen: true });
              }}
              onMouseLeave={() => {
                this.setState({ isOpen: false });
              }}
              open={this.state.isOpen}
              title="About"
              id="basic-nav-dropdown"
            >
              <Nav.Item>
                <Nav.Link eventkey="1" as={Link} to="/about">
                  About Eco
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventkey="9" as={Link} to="/team">
                  Meet the Team
                </Nav.Link>
              </Nav.Item>
            </NavDropdown>
            <Nav.Item>
              <Nav.Link eventkey="2" as={Link} to="/news">
                News
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventkey="4" as={Link} to="/surveys">
                Surveys
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventkey="5" as={Link} to="/opportunities">
                Jobs
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventkey="6" as={Link} to="/resources">
                Resources
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventkey="7" as={Link} to="/projectstatus">
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <a className="nav-link" href={CONTACT_US_LINK}>
                Contact Us
              </a>
            </Nav.Item>
            <Nav.Item eventkey="8" as={Link} to="/donate">
              <Button id="donate-button">Donate</Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
