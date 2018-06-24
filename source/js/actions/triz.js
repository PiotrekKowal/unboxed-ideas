export const SET_SOLUTION = 'SET_SOLUTION';
export const TOGGLE_FEATURE_TO_IMPROVE_START = 'TOGGLE_FEATURE_TO_IMPROVE_START';
export const TOGGLE_FEATURE_TO_IMPROVE_SAGA = 'TOGGLE_FEATURE_TO_IMPROVE_SAGA';
export const TOGGLE_FEATURE_TO_STAY_SAGA = 'TOGGLE_FEATURE_TO_STAY_SAGA';
export const TOGGLE_FEATURE_TO_STAY_START = 'TOGGLE_FEATURE_TO_STAY_START';

export function toggleFeatureToImprove(id) {
  return {
    type: TOGGLE_FEATURE_TO_IMPROVE_SAGA,
    data: id,
  };
}

export function toggleFeatureToImproveStart(id) {
  return {
    type: TOGGLE_FEATURE_TO_IMPROVE_START,
    data: id,
  };
}

export function toggleFeatureToStay(id) {
  return {
    type: TOGGLE_FEATURE_TO_STAY_SAGA,
    data: id,
  };
}

export function toggleFeatureToStayStart(id) {
  return {
    type: TOGGLE_FEATURE_TO_STAY_START,
    data: id,
  };
}

export function setSolutions() {
  return {
    type: SET_SOLUTION,
  };
}
