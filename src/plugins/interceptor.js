import axios from 'axios';

let baseURL = 'https://www.thecocktaildb.com/api/json/v1';

const httpClient = axios.create({ baseURL });

// Create a response interceptor
const responseInterceptor = httpClient.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response.status === 401 || error.response.status === 403) {
            console.log('error')
        }
        else if (error.response.status === 404) {
            console.log('error')
        }
        else if (error.response.status === 400) {
            console.log('error')
        }
        // Do something with response error
        else {
            console.log('error')
            return Promise.reject(error);
        }
    }
);

export default httpClient;