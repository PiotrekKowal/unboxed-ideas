import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Content = props => {
  const {
    children, className, ...otherProps
  } = props;

  const classes = classNames('mdl-layout__content', className);


  return <div className={ classes } { ...otherProps } >{children}</div>;
};

Content.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default Content;
