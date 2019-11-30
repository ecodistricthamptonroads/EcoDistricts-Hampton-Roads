import { Component } from 'react';
import { connect } from 'react-redux';
import React from 'react';
import logo from '../../assets/images/logo.png';
import Card from 'react-bootstrap/Card';

class NewsCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Card>
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <img src={this.props.src} height={120} />
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
