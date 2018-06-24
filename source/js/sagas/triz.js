import { takeLatest, put } from 'redux-saga/effects';

import {
  TOGGLE_FEATURE_TO_IMPROVE_SAGA,
  TOGGLE_FEATURE_TO_STAY_SAGA,
  toggleFeatureToImproveStart,
  toggleFeatureToStayStart,
  setSolutions,
} from 'actions/triz';


function* createToggleFeatureToImprove(options) { // eslint-disable-line consistent-return
  yield put(toggleFeatureToImproveStart(options.data));
  yield put(setSolutions());
}

export function* toggleFeatureToImproveWatcher() {
  yield takeLatest(TOGGLE_FEATURE_TO_IMPROVE_SAGA, createToggleFeatureToImprove);
}


function* createToggleFeatureToStay(options) { // eslint-disable-line consistent-return
  yield put(toggleFeatureToStayStart(options.data));
  yield put(setSolutions());
}

export function* toggleFeatureToStayWatcher() {
  yield takeLatest(TOGGLE_FEATURE_TO_STAY_SAGA, createToggleFeatureToStay);
}


export default [
  toggleFeatureToImproveWatcher(),
  toggleFeatureToStayWatcher(),
];
