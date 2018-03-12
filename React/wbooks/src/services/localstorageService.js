export const saveUserTokenAuthentication = props => {
  localStorage.setItem('userToken', props.access_token);
  localStorage.setItem('user', props.renew_id);
};

export const retrieveUserTokenFromLocalStorage = () => localStorage.getItem('userToken');

export const retrieveUserIdFromLocalStorage = () => localStorage.getItem('user');

export const removeUserTokenAuthentication = () => localStorage.removeItem('user');
