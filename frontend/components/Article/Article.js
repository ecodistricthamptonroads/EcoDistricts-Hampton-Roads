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
      news: ''
    };
  }

  componentDidMount() {
    console.log(this.props.news);
    console.log('sfsdfsfdsfsdf');
    console.log(
      this.props.news.filter(
        article => article.id == this.props.match.params.id
      )
    );
    this.setState({
      news: this.props.news.filter(
        article => article.id == this.props.match.params.id
      )[0]
    });
  }

  render() {
    return (
      <div>
        <Card>
          <Card.Img variant="top" src={logo} height={400} />
          <Card.Body>
            <Card.Title> {this.state.news.title} </Card.Title>
            <Card.Text>{this.state.news.description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem> {this.state.news.text} </ListGroupItem>
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
    news: state.news.news
  };
};

export default connect(mapStateToProps)(Article);
