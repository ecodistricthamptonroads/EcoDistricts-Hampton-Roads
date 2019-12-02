import { Component } from 'react';
import React from 'react';
import { connect } from 'react-redux';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const url =
  'https://ecodistricthamptonroads.us4.list-manage.com/subscribe/post?u=51eb002c7ef49ac4bf7de17e2&amp;id=cca6d76921';

const CustomForm = ({ status, message, onValidated }) => {
  let email;

  const submit = e => {
    email &&
      email.value.indexOf('@') > -1 &&
      onValidated({
        EMAIL: email.value
      });
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={submit}>
        <div>Subscribe to our mailing list</div>
        <div className="input-group">
          <input
            ref={node => (email = node)}
            type="email"
            placeholder="Your email"
            className="form-control"
            value={status === 'success' ? '' : null}
          />
          <div className="input-group-append">
            <button type="submit" className="btn btn-secondary">
              Subscribe
            </button>
          </div>
        </div>
      </form>

      {status === 'sending' && <div style={{ color: 'blue' }}>sending...</div>}
      {status === 'error' && (
        <div
          class="alert alert-danger mb-0 mt-3 small"
          role="alert"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === 'success' && (
        <div
          class="alert alert-success mb-0 mt-3 small"
          role="alert"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
    </div>
  );
};

const MailChimpSubscribe = () => {
  return (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <CustomForm
          status={status}
          message={message}
          onValidated={formData => subscribe(formData)}
        />
      )}
    />
  );
};

export default MailChimpSubscribe;
