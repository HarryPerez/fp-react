import * as authService from '../../services/authService';
import * as localStorageService from '../../services/localstorageService';

import * as types from './actionTypes';

export const saveSession = (name, password) => async dispatch => {
  dispatch({ type: types.USER_LOGIN });
  try {
    const user = await authService.retrieveUserData(name, password);
    if (user) {
      localStorageService.saveUserTokenAuthentication(user);
      const loggedUserResponse = await authService.fetchLoggedUser();
      if (loggedUserResponse.statusText === 'OK') {
        dispatch({
          type: types.USER_LOGIN_SUCCESS,
          payload: { token: user.access_token, id: user.renew_id, loggedUser: loggedUserResponse.data }
        });
        return user;
      }
      dispatch({ type: types.USER_LOGIN_FAILURE });
      return false;
    }
  } catch (error) {
    dispatch({ type: types.USER_LOGIN_FAILURE });
    return false;
  }
  return false;
};

export const saveUserName = userName => dispatch =>
  dispatch({ type: types.SESSION_USERNAME_CHANGED, payload: userName });

export const savePassword = password => dispatch =>
  dispatch({ type: types.SESSION_PASSWORD_CHANGED, payload: password });

export const closeSession = () => dispatch => {
  localStorageService.removeUserTokenAuthentication();
  dispatch({ type: types.SESSION_CLOSED });
};

export const loadSession = () => async dispatch => {
  const userToken = localStorageService.retrieveUserTokenFromLocalStorage();
  const userId = localStorageService.retrieveUserIdFromLocalStorage();
  const response = await authService.fetchLoggedUser();
  if (response.statusText === 'OK') {
    dispatch({
      type: types.USER_LOGIN_SUCCESS,
      payload: { token: userToken, id: userId, loggedUser: response.data }
    });
  }
};

export const fetchUser = userId => async dispatch => {
  dispatch({ type: types.USER_DATA_FETCH });
  const response = await authService.fetchUser(userId);
  if (response.statusText === 'OK') {
    dispatch({
      type: types.USER_DATA_FETCH_SUCCESS,
      payload: { user: response.data, userId: response.data.id }
    });
    return response;
  }
  dispatch({ type: types.USER_DATA_FETCH_FAILURE });
  return false;
};

export const fetchRents = () => async (dispatch, getState) => {
  const { userSimpleId } = getState().session;
  dispatch({ type: types.USER_RENTS_FETCH });
  const response = await authService.fetchRents(userSimpleId);
  if (response.statusText === 'OK') {
    const orderedRents = response.data.sort((rent, nextRent) => Number(nextRent.id) - Number(rent.id));
    dispatch({
      type: types.USER_RENTS_FETCH_SUCCESS,
      payload: { rents: orderedRents, rentsLength: orderedRents.length }
    });
    return response;
  }
  dispatch({ type: types.USER_RENTS_FETCH_FAILURE });
  return false;
};

export const fetchComments = () => async (dispatch, getState) => {
  const { userSimpleId } = getState().session;
  dispatch({ type: types.USER_COMMENTS_FETCH });
  const response = await authService.fetchComments(userSimpleId);
  if (response.statusText === 'OK') {
    const orderedComments = response.data.sort(
      (comment, nextComment) => Number(nextComment.id) - Number(comment.id)
    );
    dispatch({
      type: types.USER_COMMENTS_FETCH_SUCCESS,
      payload: { comments: orderedComments, commentsLength: orderedComments.length }
    });
    return response;
  }
  dispatch({ type: types.USER_COMMENTS_FETCH_FAILURE });
  return false;
};
