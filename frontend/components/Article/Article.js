import { Component } from 'react';
import { connect } from 'react-redux';
import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import logo from '../../assets/images/logo.png';
import axios from "axios";

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: {title: '', description: '', text: ''}
    };
  }

  componentDidMount() {
    console.log('hihid');
    console.log(this.props.news);
    axios.get('/api/news/' + this.props.match.params.id).then((news) => {
      console.log("hi");
      console.log(news);
      this.setState({news: news.data})
    });
    // this.setState({
    //   news: this.props.news.filter(
    //     article => article.id == this.props.match.params.id
    //   )[0]
    // });
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
