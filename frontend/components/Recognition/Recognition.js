import { Component } from 'react';
import { connect } from 'react-redux';
import React from 'react';
import Table from 'react-bootstrap/Table';

class Recognition extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th> Title </th>
            <th> Description </th>
            <th> Hello </th>
          </tr>
        </thead>
      </Table>
    );
  }
}

const mapStateToProps = state => {
  return {
    issues: state.form.issues
  };
};

const mapDispatchToProps = (/* dispatch */) => {
  return {};
};

export default connect(null, mapDispatchToProps())(Recognition);
