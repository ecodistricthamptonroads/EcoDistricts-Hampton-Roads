import { Component } from 'react';
import { connect } from 'react-redux';
import React from 'react';
import logo from '../../assets/images/logo.png';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
///
class NewsCard extends Component {
  constructor(props) {
    super(props);

    this.state = { src: logo };
  }////
//editing, fix possible issue

  componentDidMount() {
    if (this.props.article.image) {
      axios
        .get('/api/file/get_file_by_id/' + this.props.article.image)
        .then(url => {
          console.log(url.data);
          this.setState({ src: url.data });
        });
    } else {
      this.setState({ src: logo });
    }
  }

  render() {
    //let src = logo;

    return (
      <div>
        <Card>
          <div className="container">
            <div className="row">
              <div className="col-4">
                <img src={this.state.src} height={120} width={120} />
              </div>
              <div className="col-6">
                <Card.Body>
                  <Card.Title> {this.props.article.title} </Card.Title>
                  <Card.Text> {this.props.article.author} </Card.Text>
                  <Card.Text> {this.props.article.description} </Card.Text>
                </Card.Body>
              </div>
            </div>
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
