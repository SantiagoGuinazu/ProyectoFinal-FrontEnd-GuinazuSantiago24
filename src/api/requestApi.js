import ecommerceApi from './config';

export const loginUser = async(email, password) => {
    try {
        const {data} = await ecommerceApi.post('/auth/login', {email, password});
        const {token, usuario} = data;
        const {_id, name, lastName, rol, cart_id} = usuario;
        localStorage.setItem('token', token);
        return{ok: true, _id, name, lastName, rol, cart_id}
    } catch (error) {
        console.log(error)
        return{ok:false, msg:ErrorMessage.response.data.msg};
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
        const {data} = await ecommerceApi.get('/auth/renew');
        const {token, usuario} = data;
        const {_id, name, lastName, rol, cart_id} = usuario;
        localStorage.setItem('token', token);
        return{ok: true, _id, name, lastName, rol, cart_id}
    } catch (error) {
        console.log(error)
        return{ok:false};
    }
};