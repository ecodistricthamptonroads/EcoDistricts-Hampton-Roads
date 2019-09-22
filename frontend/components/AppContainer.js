import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import '../../public/app.css';
import Header from './Header';
import Land from './Land';
import Issue from './Issue/Issue';
import Login from './Login/Login';
import AdminIssue from './AdminIssue/AdminIssues';
import Surveys from './Surveys/Surveys';
import requireAuth from '../helpers/requireAuth';

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
                  <Route path="/surveys" component={Surveys} />
                  {/*<Route path="/adminissues" component={requireAuth(AdminIssue)} />*/}
                  <Route path="/login" component={Login} />
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
