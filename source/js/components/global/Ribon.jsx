import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Ribon = props => {
  const {
    children, className, ...otherProps
  } = props;

  const classes = classNames('app-ribon', className);

  return <div className={ classes } { ...otherProps } >{children}</div>;
};

Ribon.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default Ribon;
