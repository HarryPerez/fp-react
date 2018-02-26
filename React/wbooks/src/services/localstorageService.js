const saveUserAuthentication = props => {
  sessionStorage.setItem('user', props.data.access_token);
}

export default saveUserAuthentication;
