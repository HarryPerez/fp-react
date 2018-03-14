import api from '../app/config/api';

export const retrieveUserData = async (name, password) => {
  const response = await api.post('/users/sessions', { email: name, password });
  if (response) {
    api.defaults.headers.Authorization = response.data.access_token;
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

export const fetchWishes = user => api.get(`/users/${user.renew_id}/wishes/`);

export const saveWish = (bookId, user) =>
  api.post(`/users/${user}/wishes/`, {
    wish: {
      book_id: bookId,
      user_id: user
    }
  });

export const fetchLoggedUser = () => api.get(`/users/me`);

export const fetchUser = userId => api.get(`/users/${userId}`);

export const fetchRents = userId => api.get(`/users/${userId}/rents`);

export const fetchComments = userId => api.get(`/users/${userId}/comments`);
