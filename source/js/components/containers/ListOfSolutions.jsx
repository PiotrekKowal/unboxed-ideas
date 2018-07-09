import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import uuid from 'uuid/v4';
import { routeCodes } from 'constants/routes';

import ListItem from 'components/global/List/ListItem';
import ListItemContent from 'components/global/List/ListItemContent';
import ListItemAvatar from 'components/global/List/ListItemAvatar';

import FaAnchor from 'react-icons/lib/ti/anchor';
import MdHealing from 'react-icons/lib/md/healing';
import IoSadOutline from 'react-icons/lib/io/sad-outline';
import TiLightbulbOutline from 'react-icons/lib/io/ios-lightbulb-outline';
import TiLightbulb from 'react-icons/lib/io/ios-lightbulb';

@connect(state => ({
  solutions: state.triz.get('solutions'),
}))
export default class ListOfSolutions extends Component {
  static propTypes = {
    solutions: PropTypes.array,
  }

  render() {
    const {
      solutions,
    } = this.props;
    return (
      <ul className='mdl-list list_separated'>
        {
            solutions.map(
              (solution, id) =>
                (
                  <ListItem key={ uuid() } >
                    <ListItemContent useBodyClass >
                      {/* <ListItemAvatar component={ <TiLightbulb /> } /> */}
                      <span className='mdl-chip mdl-chip--contact'>
                        <span className='mdl-chip__contact mdl-color--green-300 mdl-color-text--white'>
                          <TiLightbulb />
                        </span>
                        <span className='mdl-chip__text'>{ `Solution #${ id + 1 }` }</span>
                      </span>
                      <span className='mdl-chip mdl-chip--contact'>
                        <span className='mdl-chip__contact mdl-color--blue-400 mdl-color-text--white'>
                          <MdHealing />
                        </span>
                        <span className='mdl-chip__text'>{ solution.whatToImprove }</span>
                      </span>
                      <span className='mdl-chip mdl-chip--contact'>
                        <span className='mdl-chip__contact mdl-color--pink-400 mdl-color-text--white'>
                          <FaAnchor />
                        </span>
                        <span className='mdl-chip__text'>{ solution.whatToKeep }</span>
                      </span>
                      <ul className='mdl-list'>{
                        solution.propositions.map(proposition => (
                          <ListItem key={ uuid() } twoLine>
                            <ListItemContent
                              subtitle={
                                <NavLink
                                  className='mdl-color-text--grey-500'
                                  to={ `${ routeCodes.EXAMPLES }/${ proposition }` }
                                >
                                show examples
                                </NavLink>
                              }
                            >
                              <ListItemAvatar
                                className='mdl-list__item-avatar--transparent'
                                component={ <TiLightbulbOutline /> }
                              />
                              {proposition}
                            </ListItemContent >
                          </ListItem>
                        ))
                      }
                      </ul>
                    </ListItemContent>
                  </ListItem>
                )
            )
          }
        {
          solutions.length === 0 &&
          <ListItem twoLine>
            <ListItemContent
              subtitle='Try picking different contradictions'
            >
              <ListItemAvatar
                component={ <IoSadOutline /> }
                className='mdl-list__item-avatar--transparent'
              />
              No solution was found
            </ListItemContent>
          </ListItem>
        }
      </ul>
    );
  }
}
