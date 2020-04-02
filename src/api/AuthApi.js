import axios from 'axios';
import BaseApi from './BaseApi';

class AuthApi extends BaseApi {

  login(email, password) {
    return axios.post(
      this.REACT_APP_SERVER_URL + "api/auth/login",
        {email, password}
    );
  }

  forgotPassword(email) {
    return axios.post(
      this.REACT_APP_SERVER_URL + "api/auth/request_password",
        {email}
    );
  }

  register(email, password, role, agreeTerm, newsletter) {
    return axios.post(
      this.REACT_APP_SERVER_URL + "api/auth/signup",
        {email, password, role, agreeTerm, newsletter}
    );
  }

  logout() {
    return axios.post(
      this.REACT_APP_SERVER_URL + "api/auth/logout"
    );
  }

 

}

export default new AuthApi();
