import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  component: PropTypes.node,
};

const ListItemAvatar = (props) => {
  const { className, component, ...otherProps } = props;
  const classes = classNames('mdl-list__item-avatar', className);

  return <span className={ classes } { ...otherProps }>{component}</span>;
};

ListItemAvatar.propTypes = propTypes;

export default ListItemAvatar;
