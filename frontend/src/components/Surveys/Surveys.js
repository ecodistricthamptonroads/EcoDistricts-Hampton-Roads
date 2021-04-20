import { Component } from 'react';
import React from 'react';
import Form from 'react-bootstrap/Form';
import { getSurveys } from '../../helpers/api';
// import focus_group from '../../assets/images/focus_group.png';
import futuresuburbs from '../../assets/images/survey-futuresuburbs.jpg';

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
    // getSurveys().then(req => {
    //   this.setState({ surveys: req.data });
    // });
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
          <img className="col" Style="width:50%; padding-right: 2.5%" src={futuresuburbs} />
          <div className="col focus-text">
            <h1 className="row Survey-focus-text" Style="font-weight: bold">
              Cavalier Manor Study of Community Needs
            </h1>
            {/* <h1>https://forms.gle/thx3znUcUovX5iqbA</h1> */}
            <div className="row">
              <button
                style={{
                  color: 'white',
                  backgroundColor: '#153967',
                  border: 'None',
                  fontFamily: 'Lato',
                  marginTop: '4vh'
                  // borderRadius: 10
                }}
              >
                Sign Up Here!
              </button>
            </div>
            <br></br>
            <h2 className="row">
              Help the Cavalier Manor area become sustainable, equitable,
              resilient, and climate ready!
            </h2>
            <h2 className="row">
              Compensation will be a $20 Amazon Gift Card for a 90 minute
              session.
            </h2>
            <h2 className="row">
              Cavalier Manor, Victory Park, and Crystal Lake Residents Only
            </h2>
          </div>
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
