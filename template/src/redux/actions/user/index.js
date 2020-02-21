import {
  USER_REQUEST,
  USER_SUCCESS,
  USER_FAILURE
 } from '../../types';

export const userRequest = (userId) => {
  return {
    type: USER_REQUEST,
    userId: userId
  }
}

export const userSuccess = (successData) => {
  return {
    type: USER_SUCCESS,
    payload: successData
  }
}

export const userFailure = () => {
  return {
    type: USER_FAILURE
  }
}
