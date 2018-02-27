export const saveUserAuthentication = props => {
  localStorage.setItem('user', props.data.access_token);
}

export const retrieveUserFromLocalStorage = () => {
  return localStorage.getItem('user');
}
