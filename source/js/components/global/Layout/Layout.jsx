import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  fixedDrawer: PropTypes.bool,
  fixedHeader: PropTypes.bool,
  fixedTabs: PropTypes.bool,
};

const Layout = props => {
  const {
    className, fixedDrawer, fixedHeader, fixedTabs, ...otherProps
  } = props;

  const classes = classNames('mdl-layout mdl-js-layout', {
    'mdl-layout--fixed-drawer': fixedDrawer,
    'mdl-layout--fixed-header': fixedHeader,
    'mdl-layout--fixed-tabs': fixedTabs,
  }, className);

  return (
    <div className={ classes } { ...otherProps }>
      <div className='mdl-layout__inner-container'>
        {props.children}
      </div>
    </div>
  );
};


Layout.propTypes = propTypes;

export default Layout;
