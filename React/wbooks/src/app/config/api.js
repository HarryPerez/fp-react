import axios from 'axios';

const api = axios.create({
  baseURL: 'https://wbooks-api-stage.herokuapp.com/api/v1'
});

export default api;
