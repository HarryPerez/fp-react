import axios from 'axios';
import * as localstorageService from '../../services/localstorageService';

const api = axios.create({
  baseURL: 'https://wbooks-api-stage.herokuapp.com/api/v1',
  headers: { 'Authorization': localstorageService.retrieveUserFromLocalStorage() }
});

export default api;
