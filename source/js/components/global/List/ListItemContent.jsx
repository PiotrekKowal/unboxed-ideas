import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  subtitle: PropTypes.node,
  useBodyClass: PropTypes.bool,
};


const ListItemContent = props => {
  const {
    children, className,
    subtitle, useBodyClass, ...otherProps
  } = props;

  const classes = classNames('mdl-list__item-primary-content', className);
  const subtitleClassName = useBodyClass ? 'mdl-list__item-text-body' : 'mdl-list__item-sub-title';

  return (
    <span className={ classes } { ...otherProps }>
      <span>{children}</span>
      {subtitle && <span className={ subtitleClassName }>{subtitle}</span>}
    </span>
  );
};

ListItemContent.propTypes = propTypes;

export default ListItemContent;
