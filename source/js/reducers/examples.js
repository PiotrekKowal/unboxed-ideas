import { Map } from 'immutable';
import inventivePrinciples from 'constants/triz/inventivePrinciples';

import {
  FIND_EXAMPLE,
} from 'actions/examples';

import { filter } from './utils';

const initialState = Map({
  searchFraze: '',
  filteredListOfExamples: inventivePrinciples,
});

const actionsMap = {
  [FIND_EXAMPLE]: (state, action) => {
    const searchFraze = action.data;
    const filteredListOfExamples = filter(inventivePrinciples, searchFraze);

    return state.merge(Map({
      searchFraze,
      filteredListOfExamples,
    }));
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
