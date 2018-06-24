import { all } from 'redux-saga/effects';

import peopleSagas from 'sagas/people';
import trizSagas from 'sagas/triz';

export default function* rootSaga() {
  yield all([
    ...peopleSagas,
    ...trizSagas,
  ]);
}
