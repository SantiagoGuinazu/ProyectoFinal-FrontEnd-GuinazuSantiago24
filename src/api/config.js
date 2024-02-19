import axios from 'axios';

const ecommerceApi = axios.create({
    baseURL: 'https://ecommerce-santiagoguinazu.onrender.com/api'
});

ecommerceApi.interceptors.request.use(config=>{
    config.headers = {
        'x-token': localStorage.getItem('token'),
    }
    return config;
})

export default ecommerceApi;