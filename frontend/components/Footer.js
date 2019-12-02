import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

import '../../public/app.css';
import instagram from '../assets/images/instagram.png';
import facebook from '../assets/images/facebook.png';
import twitter from '../assets/images/twitter.jpg';

import MailChimpSubscribe from './MailChimpSubscribe.js';

const mailchimpurl =
  'https://ecodistricthamptonroads.us4.list-manage.com/subscribe/post?u=51eb002c7ef49ac4bf7de17e2&amp;id=cca6d76921';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit1(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  submit(e) {
    let email;
    email &&
      email.value.indexOf('@') > -1 &&
      onValidated({
        EMAIL: email.value
      });
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <br />
        <div className={'container-fluid'}>
          <div className={'row'}>
            <div className={'col-6'}>
              <div>
                <MailChimpSubscribe />
              </div>
            </div>
            <div className={'col-6'}>
              <div style={{ 'text-align': 'right' }}>
                Follow us on social media
              </div>
              <div style={{ 'text-align': 'right' }}>
                <a href="https://www.instagram.com/ecodistricthamptonroads/">
                  <img src={instagram} width={'24px'} height={'24px'} />
                </a>
                <a href="https://www.facebook.com/Center-for-Sustainable-Communities-Atlanta-219072231567212">
                  <img src={facebook} width={'24px'} height={'24px'} />
                </a>
                <a href="https://twitter.com/eco_dis_hampton">
                  <img src={twitter} width={'24px'} height={'24px'} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.login.user
  };
};

export default connect(mapStateToProps)(Footer);
