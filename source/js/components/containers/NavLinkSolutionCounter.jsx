import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';

@connect(state => ({
  solutions: state.triz.get('solutions'),
}))
export default class NavLinkSolutionCounter extends Component {
  static propTypes ={
    solutions: PropTypes.array,
    children: PropTypes.node,
    className: PropTypes.string,
  }
  render() {
    const {
      solutions: { length }, children, className, ...otherProps
    } = this.props;
    const solutionCount = length || 0;
    const classname = classNames({ 'mdl-badge': solutionCount }, className);
    return (
      <span
        className={ classname }
        data-badge={ solutionCount > 1 ? solutionCount : '' }
        { ...otherProps }
      >
        {children}
      </span>
    );
  }
}
