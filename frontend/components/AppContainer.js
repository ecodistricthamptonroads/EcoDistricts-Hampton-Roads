import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import '../../public/app.css';
import Header from './Header';
import Land from './Land';
import Issue from './Issue/Issue';
import EducationJobs from './EducationJobs/EducationJobs';
import Login from './Login/Login';
import ProjectStatus from './ProjectStatus/ProjectStatus';
import ProjectPage from './ProjectStatus/ProjectPage';
import Email from './Email/Email';
import News from './News/News';
import Article from './Article/Article';
import Surveys from './Surveys/Surveys';

import JobPage from './EducationJobs/JobPage';

import About from './About/About';

class AppContainer extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="Head">
          <Header />
          <div className="container-fluid">
            <div className="row">
              <Switch>
                <Route exact path="/" component={Land} />
                <Route path="/issues" component={Issue} />
                <Route path="/opportunities" component={EducationJobs} />
                <Route path="/login" component={Login} />
                <Route path="/projectstatus" component={ProjectStatus} />
                <Route path="/surveys" component={Surveys} />
                <Route exact path="/news" component={News} />
                <Route path="/news/:id" component={Article} />
                <Route path="/Project/:id" component={ProjectPage} />
                <Route path="/jobs/:id" component={JobPage} />
                <Route path="/email" component={Email} />
                <Route path="/about" component={About} />
                <Route component={Land} />
              </Switch>
              {/* <div className="col-sm-10 offset-md-1"></div> */}
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default hot(module)(AppContainer);
