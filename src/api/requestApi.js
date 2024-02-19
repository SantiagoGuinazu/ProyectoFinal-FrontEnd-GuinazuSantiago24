import ecommerceApi from './config';

export const loginUser = async(email, password) => {
    try {
        const {data} = await ecommerceApi.post('/auth/login', {email, password});
        console.log(data)
    } catch (error) {
        console.log(error)
    }
};

export const registerUser = async(email, password, name, lastName) => {
    try {
        const {data} = await ecommerceApi.post('/auth/register', {email, password, name, lastName});
        console.log(data)
    } catch (error) {
        console.log(error)
    }
};

export const validarToken = async() => {
    try {
        const {data} = await ecommerceApi.post('/auth/renew');
        console.log(data)
    } catch (error) {
        console.log(error)
    }
};