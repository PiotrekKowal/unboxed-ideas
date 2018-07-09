import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { findExample } from 'actions/examples';

import ListOfExamples from 'components/containers/ListOfExamples';

@connect()
export default class Examples extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        findPrincipal: PropTypes.string,
      }),
    }),
    dispatch: PropTypes.func,
  }

  constructor(props) {
    super(props);
    const { findPrincipal } = props.match.params;
    const { dispatch } = props;

    if (findPrincipal) {
      dispatch(findExample(findPrincipal));
    }
  }

  render() {
    const { findPrincipal } = this.props.match.params;
    return (
      <div className='animate_text_focus_in'>
        {!findPrincipal && <h3 className='animate_text_focus_in'>Examples</h3> }
        <ListOfExamples findPrincipal={ findPrincipal } />
      </div>
    );
  }
}
