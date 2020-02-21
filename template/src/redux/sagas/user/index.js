// Libs
import { put } from 'redux-saga/effects';

// App File
import { BASE_API } from '../../../constants';
import fetchData from '../../../utils/fetchData';
import { userSuccess, userFailure } from '../../actions/user';

export function* requestUserSaga(action) {
  try {
    const res = yield fetchData({
      url: `${BASE_API}/users/${action.userId}`
    });
    yield put(userSuccess(res.data));
  } catch (err) {
      yield put(userFailure(err));
  }
}
