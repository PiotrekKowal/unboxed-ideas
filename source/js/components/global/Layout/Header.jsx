import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import HeaderRow from './HeaderRow';

const Header = props => {
  const {
    className, scroll, seamed, title, transparent,
    hideSpacer, children, ...otherProps
  } = props;

  const classes = classNames('mdl-layout__header', {
    'mdl-layout__header--scroll': scroll,
    'mdl-layout__header--seamed': seamed,
    'mdl-layout__header--transparent': transparent,
  }, className);

  return (
    <header className={ classes } { ...otherProps }>
      <HeaderRow title={ title } hideSpacer={ hideSpacer }>{children}</HeaderRow>
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  scroll: PropTypes.bool,
  seamed: PropTypes.bool,
  title: PropTypes.node,
  transparent: PropTypes.bool,
  hideSpacer: PropTypes.bool,
};

export default Header;
