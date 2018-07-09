import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';

import { toggleFeatureToImprove, toggleFeatureToStay } from 'actions/triz';
import { findContradiction } from 'actions/contradictions';

import ListItem from 'components/global/List/ListItem';
import ListItemContent from 'components/global/List/ListItemContent';
import ListItemAction from 'components/global/List/ListItemAction';
import InputField from 'components/global/Form/InputField';

import FaAnchor from 'react-icons/lib/ti/anchor';
import MdHealing from 'react-icons/lib/md/healing';
import MdFindInPage from 'react-icons/lib/fa/search';
import IoSadOutline from 'react-icons/lib/io/sad-outline';

import contradictions from 'constants/triz/contradictions';


@connect(state => ({
  featuresToImprove: state.triz.get('featuresToImprove'),
  featuresToStay: state.triz.get('featuresToStay'),
  searchFraze: state.contradictions.get('searchFraze'),
  filteredContradictions: state.contradictions.get('filteredContradictions'),
}))
export default class ListOfContradictions extends Component {
  static propTypes = {
    featuresToImprove: PropTypes.array,
    featuresToStay: PropTypes.array,
    searchFraze: PropTypes.string,
    filteredContradictions: PropTypes.array,
    dispatch: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      listOfFeatures: contradictions,
    };
  }

  handleButtonToggleImprovement = (id) => {
    const { dispatch } = this.props;

    dispatch(toggleFeatureToImprove(id));
  }

  handleButtonToggleKeeper = (id) => {
    const { dispatch } = this.props;

    dispatch(toggleFeatureToStay(id));
  }

  updateList = (searchFraze) => {
    const { dispatch } = this.props;
    dispatch(findContradiction(searchFraze));
  }

  render() {
    const { listOfFeatures } = this.state;
    const {
      featuresToImprove,
      featuresToStay,
      searchFraze,
      filteredContradictions,
    } = this.props;
    return (
      <div>
        <InputField
          label='search'
          icon={ <MdFindInPage /> }
          onChange={ this.updateList }
          value={ searchFraze }
          redux
        />
        <ul className='mdl-list list_separated'>
          {
            filteredContradictions.map(
              (propositions, id) =>
                (
                  <ListItem twoLine key={ uuid() } >
                    <ListItemContent
                      subtitle={ `#${ (id + 1) }` }
                    >
                      { propositions }
                    </ListItemContent>
                    <ListItemAction>
                      <button
                        className={ `mdl-button ${
                            featuresToImprove.indexOf(id) !== -1 ? 'mdl-color--blue-400 mdl-color-text--grey-100' : ''
                          }`
                        }
                        onClick={ () => this.handleButtonToggleImprovement(id) }
                        disabled={ featuresToStay.indexOf(id) !== -1 }

                      >
                        <MdHealing />
                      </button>
                    </ListItemAction>
                    <ListItemAction>
                      <button
                        className={ `mdl-button ${
                          featuresToStay.indexOf(id) !== -1 ? 'mdl-color--pink-400 mdl-color-text--grey-100' : ''
                          }`
                        }
                        onClick={ () => this.handleButtonToggleKeeper(id) }

                        disabled={ featuresToImprove.indexOf(id) !== -1 }
                      >
                        <FaAnchor />
                      </button>
                    </ListItemAction>
                  </ListItem>
                )
            )
          }
          {
            listOfFeatures.length === 0 &&
            <p><IoSadOutline /> No match found</p>
          }
        </ul>
      </div>
    );
  }
}
