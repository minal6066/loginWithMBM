import axios from 'axios';
class APIManager {
    constructor(props){
        // super(props);
        // var tok = tok ? ls.get('token') : '';
        // console.log(process.env.REACT_APP_URL, "React URL")
        this.axiosInstance = axios.create({
            baseURL : `${process.env.REACT_APP_URL}/`,
            timeout : 10000,
            headers : {
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Credentials' : true,
                // "Authorization" : tok ? `Bearer ${tok}` : '',
            }
        })
    }

    logIn = (params) => {
        console.log("Inside log in");
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

    signUp = (params) => {
        console.log("Inside Sign Up");
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
}
export default new APIManager();