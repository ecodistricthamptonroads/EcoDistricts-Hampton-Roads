import { Component } from 'react';
import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import logo from '../../assets/images/logo.png';
import axios from 'axios';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: { title: '', description: '', text: '', image: { logo } }
    };
  }

  componentDidMount() {
    console.log(this.props.news);
    axios.get('/api/news/' + this.props.match.params.id).then(news => {
      console.log('hi');
      console.log(news);

      if (news.data.image) {
        axios.get('/api/file/get_file_by_id/' + news.data.image).then(url => {
          console.log(url.data);
          console.log('___________________________________________');
          news.data.image = url.data;
          console.log(news.image);

          this.setState({ news: news.data });
        });
      } else {
        news.data.image = logo;

        this.setState({ news: news.data });
      }
    });
  }

  render() {
    return (
      <div>
        <Card>
          <Card.Img variant="top" src={this.state.news.image} height={600} />
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

export default Article;
