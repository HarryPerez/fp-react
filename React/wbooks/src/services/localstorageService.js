export const saveUserTokenAuthentication = props => localStorage.setItem('userToken', props.access_token);

export const retrieveUserTokenFromLocalStorage = () => localStorage.getItem('userToken');

export const removeUserTokenAuthentication = () => localStorage.removeItem('userToken');
