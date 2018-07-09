import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const HeaderRow = props => {
  const {
    className, title, children, hideSpacer, ...otherProps
  } = props;

  const classes = classNames('mdl-layout__header-row', className);

  return (
    <div className={ classes } { ...otherProps }>
      {title && <span className='mdl-layout-title mdl-layout--large-screen-only'>{title}</span>}
      {title && !hideSpacer && <div className='mdl-layout-spacer' />}
      {children}
    </div>
  );
};
HeaderRow.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  title: PropTypes.node,
  hideSpacer: PropTypes.bool,
};

export default HeaderRow;
