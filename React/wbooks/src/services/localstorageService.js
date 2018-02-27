const saveUserAuthentication = props => {
  localStorage.setItem('user', props.data.access_token);
}

const retrieveUserFromLocalStorage = () => {
  return localStorage.getItem('user');
}

const removeUserAuthentication = () => {
  return localStorage.removeItem('user');
}

export default {saveUserAuthentication, retrieveUserFromLocalStorage, removeUserAuthentication};
