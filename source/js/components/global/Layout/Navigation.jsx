import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Spacer from './Spacer';
import uuid from 'uuid/v4';


const Navigation = props => {
  const { className, children, ...otherProps } = props;

  const classes = classNames('mdl-navigation', className);

  return (
    <nav className={ classes } { ...otherProps }>
      {children.map(child => {
        const childNewProps = {
          key: uuid(),
          ...child.props,
          className: classNames({ 'mdl-navigation__link': child.type !== Spacer }, child.props.className),
        };
        return <child.type { ...childNewProps }>{child.props.children}</child.type>;
      })}
    </nav>
  );
};

Navigation.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default Navigation;
