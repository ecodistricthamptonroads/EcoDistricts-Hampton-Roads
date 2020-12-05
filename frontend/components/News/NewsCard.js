import { Component } from 'react';
import { connect } from 'react-redux';
import React from 'react';
import logo from '../../assets/images/logo.png';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

class NewsCard extends Component {
  constructor(props) {
    super(props);

    this.state = { src: logo };
  }

  componentDidMount() {
    if (this.props.article && this.props.article.image) {
      axios
        .get('/api/file/get_file_by_id/' + this.props.article.image)
        .then(url => {
          this.setState({ src: url.data });
        });
    } else {
      this.setState({ src: logo });
    }
  }

  render() {
    let src = logo;
    if (!this.props.article) return null;
    return (
      <div className="newsItem">
        <Card>
          <div>
            <img src={this.state.src} />
            <Card.Body>
              <Card.Title>
                <h3> {this.props.article.title}</h3>{' '}
              </Card.Title>
              <Card.Text>
                {' '}
                <h6>{this.props.article.author}</h6>{' '}
              </Card.Text>
              <Card.Text>
                {' '}
                <p>{this.props.article.description}</p>{' '}
              </Card.Text>
            </Card.Body>
          </div>
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

export default connect(mapStateToProps)(NewsCard);
