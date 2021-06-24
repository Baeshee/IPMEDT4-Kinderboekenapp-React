import axios from "axios";
import authHeader from './service_auth-header';
const API = "https://kinderboekenapp-laravel.herokuapp.com/api/auth/";

class AuthService{
    login(email, password){
        return axios
            .post(API + "login", { email, password})
            .then((response) => {
                if(response.data.access_token){
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data
            });
    }

    logout() {
        axios.post(API + 'logout', { headers: authHeader()});
        localStorage.removeItem("user");
    }
    
    register(name, email, password) {
        return axios.post(API + "register", {
            name,
            email,
            password,
            "password_confirmation": password,
        });
    }
}

export default new AuthService;