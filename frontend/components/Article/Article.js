import { Component } from 'react';
import { connect } from 'react-redux';
import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import logo from '../../assets/images/logo.png';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ''
    };
  }

  componentDidMount() {
    this.setState({
      id: this.props.match.params.id
    });
  }

  render() {
    return (
      <div>
        <Card>
          <Card.Img variant="top" src={logo} height={300} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.login.loggedIn
  };
};

export default connect(mapStateToProps)(Article);
