const saveUserAuthentication = props => {
  sessionStorage.setItem('user', props.data.access_token);
}

const retrieveUserFromLocalStorage = () => {
  return sessionStorage.getItem('user');
}

export default {saveUserAuthentication, retrieveUserFromLocalStorage};
