import api from '../app/config/api';

export const saveUserAuthentication = props => {
  localStorage.setItem('user', props.data.access_token);
  api.defaults.headers.common['Authorization'] = props.data.access_token;
}

export const retrieveUserFromLocalStorage = () => {
  return localStorage.getItem('user');
}

export const removeUserAuthentication = () => {
  return localStorage.removeItem('user');
}
