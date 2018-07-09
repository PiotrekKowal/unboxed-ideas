import { all } from 'redux-saga/effects';

import trizSagas from 'sagas/triz';

export default function* rootSaga() {
  yield all([
    ...trizSagas,
  ]);
}
