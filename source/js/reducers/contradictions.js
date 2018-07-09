import { Map } from 'immutable';
import contradictions from 'constants/triz/contradictions';

import {
  FIND_CONTRADICTION,
} from 'actions/contradictions';

import { filter } from './utils';

const initialState = Map({
  searchFraze: '',
  filteredContradictions: contradictions,
});

const actionsMap = {
  [FIND_CONTRADICTION]: (state, action) => {
    const searchFraze = action.data;
    const filteredContradictions = filter(contradictions, searchFraze);

    return state.merge(Map({
      searchFraze,
      filteredContradictions,
    }));
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
