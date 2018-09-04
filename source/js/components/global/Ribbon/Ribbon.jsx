import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Ribbon = props => {
  const {
    children, className, ...otherProps
  } = props;

  const classes = classNames('app-ribbon', className);

  return <aside className={ classes } { ...otherProps } >{children}</aside>;
};

Ribbon.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default Ribbon;
