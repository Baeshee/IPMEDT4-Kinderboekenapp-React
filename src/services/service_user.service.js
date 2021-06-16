import axios from 'axios';
import authHeader from './service_auth-header';

const API_URL = 'http://localhost:8000/api/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'books');
  }

  getUserBoard() {
    return axios.post(API_URL + 'auth/me', { headers: authHeader() });
  }

//   getModeratorBoard() {
//     return axios.get(API_URL + 'mod', { headers: authHeader() });
//   }

//   getAdminBoard() {
//     return axios.get(API_URL + 'admin', { headers: authHeader() });
//   }
}

export default new UserService();