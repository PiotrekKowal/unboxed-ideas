import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { findExample } from 'actions/examples';
import uuid from 'uuid/v4';

import ListItem from 'components/global/List/ListItem';
import ListItemContent from 'components/global/List/ListItemContent';
import ListItemAvatar from 'components/global/List/ListItemAvatar';
import InputField from 'components/global/Form/InputField';

import TiLightbulb from 'react-icons/lib/io/ios-lightbulb';
import MdFindInPage from 'react-icons/lib/fa/search';

import suggestions from 'constants/triz/suggestions';

@connect(state => ({
  searchFraze: state.examples.get('searchFraze'),
  filteredListOfExamples: state.examples.get('filteredListOfExamples'),
}))
export default class ListOfExamples extends Component {
  static propTypes = {
    searchFraze: PropTypes.string,
    filteredListOfExamples: PropTypes.array,
    findPrincipal: PropTypes.string,
    dispatch: PropTypes.func,
  }

  updateList = (searchFraze) => {
    const { dispatch } = this.props;
    dispatch(findExample(searchFraze));
  }

  render() {
    const { searchFraze, filteredListOfExamples, findPrincipal } = this.props;

    return (
      <div>
        {
          !findPrincipal &&
          <InputField
            label='find solution'
            icon={ <MdFindInPage /> }
            onChange={ this.updateList }
            value={ searchFraze }
            redux
          />
        }
        <ul className='mdl-list list_separated'>
          {
          filteredListOfExamples.map(
            (principal, id) =>
              (
                <ListItem key={ uuid() } >
                  <ListItemContent useBodyClass >
                    <ListItemAvatar
                      component={ <TiLightbulb /> }
                      className='mdl-color--green-300'
                      style={ { fontSize: '1.5em' } }
                    />
                    <b>{principal}</b>
                    <ul className='mdl-list mdl-list--ordered'>{
                      suggestions[id].map(suggestion => (
                        <ListItem key={ uuid() } >
                          <ListItemContent useBodyClass >
                            { suggestion }
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
        </ul>
      </div>
    );
  }
}

