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
import Recognition from './Recognition/Recognition';
import News from './News/News';
import Article from './Article/Article';
import Surveys from './Surveys/Surveys';

class AppContainer extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="Head">
          <Header />
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-8 offset-md-2">
                <Switch>
                  <Route exact path="/" component={Land} />
                  <Route path="/issues" component={Issue} />
                  <Route path="/opportunities" component={EducationJobs} />
                  <Route path="/login" component={Login} />
                  <Route path="/projectstatus" component={ProjectStatus} />
                  <Route path="/surveys" component={Surveys} />
                  <Route path="/recognition" component={Recognition} />
                  <Route exact path="/news" component={News} />
                  <Route path="/news/:id" component={Article} />
                  <Route component={Land} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default hot(module)(AppContainer);
