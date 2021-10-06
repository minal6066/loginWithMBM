import axios from 'axios';
class APIManager {
    constructor(props){
        // super(props);
        var tok = localStorage.getItem('token') ? localStorage.getItem('token') : '';
        this.axiosInstance = axios.create({
            baseURL : `http://localhost:3000/`,
            timeout : 10000,
            headers : {
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Credentials' : true,
                "Authorization" : tok ? `Bearer ${tok}` : ''
            }
        })
    }

    logIn = (params) => {
        return new Promise((resolve, reject) => {
            this.axiosInstance
            .post(
                'user/login', params
            )
            .then((response) => {
                resolve(response);
            })
            .catch(() => {
                reject();
            })
        })
    }

    register = (params) => {
        return new Promise((resolve, reject) => {
            this.axiosInstance
            .post(
                'user/register', params
            )
            .then((response) => {
                resolve(response);
            })
            .catch(() => {
                reject();
            })
        })
    }

    getProfile = (roll_no) => {
        console.log("Inside Get Profile", roll_no);
        return new Promise((resolve, reject) => {
            this.axiosInstance
            .get(
                `user/profile/${roll_no}`
            )
            .then((response) => {
                resolve(response);
            })
            .catch(() => {
                reject();
            })
        })
    }
}
export default new APIManager();