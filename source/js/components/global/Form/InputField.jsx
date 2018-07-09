import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import uuid from 'uuid/v4';


class InoutField extends Component {
  static propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    icon: PropTypes.node,
    label: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.node,
    ]).isRequired,
    redux: PropTypes.bool, // true if external variable is used
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  };

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      focused: false,
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
  }

  handleInputChange = (event) => {
    const newValue = String(event.target.value);
    if (!this.props.value) {
      this.setState({ value: newValue });
    }

    const parentFunction = this.props.onChange;
    if (typeof parentFunction === 'function') {
      parentFunction(newValue);
    }
  }

  handelFocusIn = () => {
    this.setState({ focused: true });

    const parentFunction = this.props.onFocus;
    if (typeof parentFunction === 'function') {
      parentFunction();
    }
  }

  handelFocusOut = () => {
    this.setState({ focused: false });

    const parentFunction = this.props.onBlur;
    if (typeof parentFunction === 'function') {
      parentFunction();
    }
  }

  toggleFocusState = () => {
    this.setState({ focused: !this.state.focused });
  }

  render() {
    const {
      className,
      label: labelText,
      icon,
      onChange,
      onBlur,
      onFocus,
      redux,
      value: propValue,
      ...otherProps
    } = this.props;

    const {
      value: stateValue,
      focused,
    } = this.state;

    const inputValue = redux ? propValue : stateValue;
    const inputId = uuid();

    const classes = {
      input: classNames('mdl-textfield__input', className),
      container: classNames(
        'mdl-textfield mdl-textfield--floating-label',
        {
          'is-dirty': inputValue,
          'is-focused': focused,
        }
      ),
      icon: classNames('mdl-button mdl-button--icon',
        { 'mdl-button--colored': focused }
      ),
    };


    return (
      <form action='#' onSubmit={ this.handleSubmit }>
        {icon &&
          <button
            className={ classes.icon }

            // onClick={ this.toggleFocusState }
          >
            { icon }
          </button>
          }
        <div className={ classes.container }>
          <input
            className={ classes.input }
            type='text'
            id={ inputId }
            value={ inputValue }
            onChange={ this.handleInputChange }
            onFocus={ this.handelFocusIn }
            onBlur={ this.handelFocusOut }
            { ...otherProps }
          />
          <label htmlFor={ inputId } className='mdl-textfield__label'>{ labelText }</label>
        </div>
      </form>
    );
  }
}

export default InoutField;
