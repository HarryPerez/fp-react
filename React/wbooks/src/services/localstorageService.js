import api from '../app/config/api';

export const saveUserTokenAuthentication = props => {
  localStorage.setItem('userToken', props.access_token);
  api.defaults.headers.common['Authorization'] = props.access_token;
}

export const retrieveUserTokenFromLocalStorage = () => localStorage.getItem('userToken');

export const removeUserTokenAuthentication = () => localStorage.removeItem('userToken');
