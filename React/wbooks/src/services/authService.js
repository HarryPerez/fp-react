import api from '../app/config/api';

export const retrieveUserData = async (name, password) => {
  const response = await api.post('/users/sessions', { email: name, password });
  if (response) {
    api.defaults.headers.common.Authorization = response.data.access_token;
    return response.data;
  }
  return false;
};

export const registerUser = (name, password, confirmPassword, firstName, lastName) =>
  api.post('/users', {
    user: {
      email: name,
      password,
      confirm_password: confirmPassword,
      first_name: firstName,
      last_name: lastName,
      locale: 'en'
    }
  });
