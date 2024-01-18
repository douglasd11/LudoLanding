import axios from 'axios';

const clienteAxios = axios.create({
    // baseURL : 'http://localhost:5000/'
    baseURL : import.meta.env.VITE_BASE_URL
});

export default clienteAxios;