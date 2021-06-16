import axios from "axios";

const API_URL = "http://localhost:8000/api/auth/";

class AuthService{
    login(email, password){
        return axios
            .post(API_URL + "login", { email, password})
            .then((response) => {
                if(response.data.accesToken){
                    console.log(response.data.accesToken);
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                console.log(response.data);
                return response.data
            });
    }

    logout() {
        localStorage.removeItem("user");
    }
    
    register(name, email, password) {
        return axios.post(API_URL + "register", {
            name,
            email,
            password,
        });
    }
}

export default new AuthService;