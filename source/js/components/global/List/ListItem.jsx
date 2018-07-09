import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ListItemContent from './ListItemContent';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  twoLine: PropTypes.bool,
  threeLine: PropTypes.bool,
};

const ListItem = props => {
  const {
    className, twoLine, threeLine, children, ...otherProps
  } = props;

  const classes = classNames('mdl-list__item', {
    'mdl-list__item--two-line': twoLine && !threeLine,
    'mdl-list__item--three-line': !twoLine && threeLine,
  }, className);

  const content = child => {
    if (typeof child === 'string') {
      return <ListItemContent>{child}</ListItemContent>;
    }
    if (child.type === ListItemContent) {
      return <ListItemContent { ...child.props }>{child.props.children}</ListItemContent>;
    }
    return child;
  };

  return (
    <li className={ classes } { ...otherProps }>
      {content(children)}
    </li>
  );
};

ListItem.propTypes = propTypes;

export default ListItem;
