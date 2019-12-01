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
    if (this.props.src) {
      axios.get('/api/file/get_file_by_id/' + this.props.src).then(url => {
        console.log(url.data);
        this.setState({ src: url.data });
      });
    } else {
      this.setState({ src: logo });
    }
  }

  render() {
    //let src = logo;

    console.log('sdfasdfas' + this.state.src);
    return (
      <div>
        <Card>
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <img src={this.state.src} height={120} />
              </div>
              <div className="col-8">
                <Card.Body>
                  <Card.Title> {this.props.title} </Card.Title>
                  <Card.Text> {this.props.author} </Card.Text>
                  <Card.Text> {this.props.description} </Card.Text>
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
