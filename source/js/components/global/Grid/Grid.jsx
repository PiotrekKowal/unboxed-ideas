import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import clamp from 'clamp';

const propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  noSpacing: PropTypes.bool,
  shadow: PropTypes.number,
};

const Grid = (props) => {
  const {
    noSpacing, className, children, shadow, ...otherProps
  } = props;

  const hasShadow = typeof shadow !== 'undefined';
  const shadows = [2, 3, 4, 6, 8, 16, 24].map(v => `mdl-shadow--${ v }dp`);
  const shadowLevel = clamp(shadow || 0, 0, shadows.length - 1);

  const classes = classNames('mdl-grid', {
    'mdl-grid--no-spacing': noSpacing,
    [shadows[shadowLevel]]: hasShadow,
  }, className);

  return <div className={ classes } { ...otherProps } >{children}</div>;
};

Grid.propTypes = propTypes;

export default Grid;
