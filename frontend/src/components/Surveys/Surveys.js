import { Component } from 'react';
import React from 'react';
import Form from 'react-bootstrap/Form';
import { getSurveys } from '../../helpers/api';
import focus_group from '../../assets/images/focus_group.png';
import '../../assets/stylesheets/app.css';

class Surveys extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notInitial: false,
      surveys: []
    };
  }

  componentDidMount() {
    getSurveys().then(req => {
      this.setState({ surveys: req.data });
    });
  }

  getSurveysList() {
    return (
      <div>
        <div className="SurveyList">
          {this.state.surveys.map(survey => {
            return (
              <a key={survey.id} href={survey.link}>
                <div className="Survey-elem">
                  <div className="Survey-value"> {survey.title} </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    );
  }
  getHeading() {
    return (
      <div>
        <div className="Survey-Heading-div">
          Sign Up to Provide Us Feedback!
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="Survey-container">
        {this.getHeading()}
        <div className="row">
          <h1 className="col focus-text">
            Join us for an online interview. Your feedback helps us improve the
            community!
          </h1>
          <img className="col" Style="width:50%" src={focus_group} />
        </div>
        <div className="Survey-Body">
          <h1 className="Survey-Feedback">Help Us Improve!</h1>
          <h3>Please fill out our survey to help us improve the community</h3>
          {this.getSurveysList()}
        </div>
      </div>
    );
  }
}

export default Surveys;
