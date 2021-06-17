import axios from "axios";
import authHeader from './service_auth-header';
const API_URL = "http://localhost:8000/api/auth/";

class AuthService{
    login(email, password){
        return axios
            .post(API_URL + "login", { email, password})
            .then((response) => {
                if(response.data.access_token){
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data
            });
    }

    logout() {
        axios.post(API_URL + 'logout', { headers: authHeader()});
        localStorage.removeItem("user");
    }
    
    register(name, email, password) {
        return axios.post(API_URL + "register", {
            name,
            email,
            password,
            "password_confirmation": password,
        });
    }
}

export default new AuthService;