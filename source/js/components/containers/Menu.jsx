import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { routeCodes } from 'constants/routes';

import MdHome from 'react-icons/lib/md/home';
import MdHealing from 'react-icons/lib/md/healing';
import TiLightbulb from 'react-icons/lib/io/ios-lightbulb';
import FaPaperclip from 'react-icons/lib/fa/paperclip';

import Header from 'components/global/Layout/Header';
import Navigation from 'components/global/Layout/Navigation';
import NavLinkSolutionCounter from './NavLinkSolutionCounter';


export default class Menu extends Component {
  static propTypes ={
    title: PropTypes.string,
  }

  render() {
    const { title } = this.props;
    return (
      <Header title={ title } className='mdl-color--grey-100 mdl-color-text--grey-800'>
        <Navigation >
          <NavLink
            activeClassName='app-menu--active'
            className='mdl-color-text--grey-800'
            exact
            to={ routeCodes.HOME }
            data-icon='xxx'
          >
            <span className='app-navigation__link--desktop' >Home</span>
            <MdHome className='app-navigation__link--small-devices app-navigation__icon' />
          </NavLink>

          <NavLink
            activeClassName='app-menu--active'
            className='mdl-color-text--grey-800'
            exact
            to={ routeCodes.CONTRADICTIONS }
          >
            <span className='app-navigation__link--desktop' >Contradictions</span>
            <MdHealing className='app-navigation__link--small-devices app-navigation__icon' />
          </NavLink>

          <NavLink
            activeClassName='app-menu--active'
            className='mdl-color-text--grey-800'
            exact
            to={ routeCodes.SOLUTIONS }
          >
            <NavLinkSolutionCounter>
              <span className='app-navigation__link--desktop' >Solutions</span>
              <TiLightbulb className='app-navigation__link--small-devices app-navigation__icon' />
            </NavLinkSolutionCounter>
          </NavLink>

          <NavLink
            activeClassName='app-menu--active'
            className='mdl-color-text--grey-800'
            exact
            to={ routeCodes.EXAMPLES }
          >
            <span className='app-navigation__link--desktop' >Examples</span>
            <FaPaperclip className='app-navigation__link--small-devices app-navigation__icon' />
          </NavLink>
        </Navigation>
      </Header>
    );
  }
}
