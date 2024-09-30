import axios from 'axios';

const axiosClient = axios.create({
    baseURL : 'http://localhost:8000/api/',
});

axiosClient.interceptors.request.use(
    function (config) {
        const token = localStorage.getItem('token');
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    }
);

axiosClient.interceptors.response.use(
    function (response){
        return response;
    },
);

export default axiosClient;
