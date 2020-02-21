// Libs
import { all, takeLatest } from 'redux-saga/effects';

import * as actionTypes from '../types';
import { requestUserSaga } from './user';

function* rootSaga() {
    yield all([
      takeLatest(actionTypes.USER_REQUEST, requestUserSaga),
    ]);
}

export default rootSaga;
