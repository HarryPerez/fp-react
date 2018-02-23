const saveInLocalStorage = props => {
  sessionStorage.setItem('user', props.data.access_token);
}

export default saveInLocalStorage;
