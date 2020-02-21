// App File
import * as actionTypes from '../../types';

const initialState = {
    data: {},
    error: null
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.USER_SUCCESS: {
      return {
        ...state,
        data: payload
      }
    }
    case actionTypes.USER_FAILURE:
      return state.set('error', true);
    default:
      return state;
}
};

export default userReducer;
