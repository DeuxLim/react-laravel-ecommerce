import axios from 'axios';

const axiosClient = axios.create({
    baseURL : 'http://localhost:8000/api/',
});

axiosClient.interceptors.request.use(
    function (config) {
        const token = localStorage.getItem('token');
        if(token && token !== "undefined"){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

axiosClient.interceptors.response.use(
    function (response){
        return response;
    },
    function (error) {
        if (error.response && error.response.status === 401) {
            // Optionally logout the user or redirect to login page when unauthorized
            localStorage.removeItem('token');
            localStorage.removeItem('tokenExpiry');
            window.location.href = '/login'; // or dispatch a logout action
        }
        return Promise.reject(error);
    }
);

export default axiosClient;
