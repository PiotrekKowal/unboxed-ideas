import { Map } from 'immutable';
import Solution from 'reducers/triz/Solution';

import {
  SET_SOLUTION,
  TOGGLE_FEATURE_TO_IMPROVE_START,
  TOGGLE_FEATURE_TO_STAY_START,
} from 'actions/triz';

import {
  uniqueValues,
  orderAccendingByNumbers,
} from './triz.utils';

const initialState = Map({
  featuresToImprove: [1, 2],
  featuresToStay: [4, 6],
  solution: [],
  solutionBest: [],
});

const actionsMap = {
  [TOGGLE_FEATURE_TO_IMPROVE_START]: (state, action) => {
    const featuresToImprove = state.get('featuresToImprove');
    const featureId = action.data;
    let newListOfFeatures;

    if (featuresToImprove.includes(featureId)) {
      newListOfFeatures = featuresToImprove.filter(x => x !== featureId);
    } else {
      newListOfFeatures = [...featuresToImprove, featureId].filter(uniqueValues).sort(orderAccendingByNumbers);
    }

    return state.merge(Map({
      featuresToImprove: newListOfFeatures,
    }));
  },

  [TOGGLE_FEATURE_TO_STAY_START]: (state, action) => {
    const featuresToImprove = state.get('featuresToStay');
    const featureId = action.data;
    let newListOfFeatures;

    if (featuresToImprove.includes(featureId)) {
      newListOfFeatures = featuresToImprove.filter(x => x !== featureId);
    } else {
      newListOfFeatures = [...featuresToImprove, featureId].filter(uniqueValues).sort(orderAccendingByNumbers);
    }

    return state.merge(Map({
      featuresToStay: newListOfFeatures,
    }));
  },

  [SET_SOLUTION]: (state) => {
    const featuresToImprove = state.get('featuresToImprove');
    const featuresToStay = state.get('featuresToStay');
    const solution = [];
    featuresToImprove.forEach(flaw => {
      featuresToStay.forEach(keep => {
        if (flaw !== keep) {
          const newSet = new Solution(flaw, keep);
          if (newSet.propositions.length) {
            solution.push(newSet);
          }
        }
      });
    });

    return state.merge(Map({
      solution,
    }));
  },
};


export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
