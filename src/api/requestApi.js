import ecommerceApi from './config';

export const loginUser = async (email, password) => {
    try {
        const { data } = await ecommerceApi.post('/auth/login', { email, password });
        console.log(data)
        const { token, usuario } = data;
        const { _id, name, lastName, rol, cart_id } = usuario;
        localStorage.setItem('token', token);
        return { ok: true, _id, name, lastName, rol, cart_id }
    } catch (error) {
        console.log(error)
        return { ok: false, msg: error.response.data.msg };
    }
};

export const registerUser = async (email, password, name, lastName) => {
    try {
        const { data } = await ecommerceApi.post('/auth/register', { email, password, name, lastName });
        const { token, usuario } = data;
        const { _id, rol, cart_id } = usuario;
        localStorage.setItem('token', token);
        return { ok: true, _id, name, lastName, rol, cart_id }
    } catch (error) {
        console.log(error)
        return { ok: false, msg: error.response.data.errors[0].msg }
    }
};

export const validarToken = async () => {
    try {
        const { data } = await ecommerceApi.get('/auth/renew');
        const { token, usuario } = data;
        const { _id, name, lastName, rol, cart_id } = usuario;
        localStorage.setItem('token', token);
        return { ok: true, _id, name, lastName, rol, cart_id }
    } catch (error) {
        console.log(error)
        return { ok: false };
    }
};

export const sendEmailResetPass = async (email) => {
    try {
        const { data } = await ecommerceApi.post('/auth/cambiar-password', { email });
        return { ok: true }
    } catch (error) {
        console.log(error);
        return { ok: false, msg: error.response.data.msg };
    }
};

export const resetPass = async (password, token) => {
    try {
        const { data } = await ecommerceApi.post('/auth/reset-password', { password, token });
        return { ok: true }
    } catch (error) {
        console.log(error);
        return { ok: false, msg: error.response.data.msg };
    }
};

export const getProducts = async (pageProducts = 1) => {
    try {
        const { data } = await ecommerceApi.get(`/products?page=${pageProducts}`);

        const { result } = data;
        const { payload: products, totalDocs, totalPages, limit, query, page, hasNextPage, hasPrevPage, prevPage, nextPage } = result;
        return { ok: true, products, pagination: { totalDocs, totalPages, limit, query, page, hasNextPage, hasPrevPage, prevPage, nextPage } };
    } catch (error) {
        console.log(error);
        return { ok: false };
    }
};

export const getProductbyId = async (id) => {
    try {

        const { data } = await ecommerceApi.get(`/products/${id}`);

        const { producto } = data;

        return { ok: true, product: producto };
    } catch (error) {
        console.log(error);
        return { ok: false };
    }
};

export const createProduct = async (producto) => {
    try {
        const { data } = await ecommerceApi.post('/products', producto);
        return { ok: true, producto: data.producto };
    } catch (error) {
        console.log(error);
        return { ok: false, msg: error.response.data.errors[0].msg };
    }
};

export const deleteProduct = async (idProduct) => {
    try {
        const { data } = await ecommerceApi.delete(`/products/${idProduct}`);
        return { ok: true, msg: data.msg };
    } catch (error) {
        console.log({ error });
        return { ok: false, msg: error.response.data.msg };
    }
};

export const updateProduct = async (id, values) => {
    try {
        const { data } = await ecommerceApi.put(`/products/${id}`, values);
        return { ok: true, producto: data.producto };
    } catch (error) {
        console.log({ error });
        return { ok: false, msg: error.response.data.msg };
    }
};

export const getCartById = async (id) => {
    try {
        const { data } = await ecommerceApi.get(`/carts/${id}`);
        const { carrito } = data;
        return { ok: true, cart: carrito };
    } catch (error) {
        console.log(error);
        return { ok: false };
    }
};

export const addProductInCart = async (idCart, idProduct) => {
    try {
        const { data } = await ecommerceApi.post(`/carts/${idCart}/product/${idProduct}`);
        return { ok: true, cart: data.carrito };
    } catch (error) {
        console.log({ error });
        return { ok: false, msg: error.response.data.msg };
    }
};

export const removeProductInCart = async (idCart, idProduct, quantity) => {
    console.log({idCart,idProduct,quantity})
    try {
        const { data } = await ecommerceApi.put(`/carts/${idCart}/products/${idProduct}`, { quantity });
        return { ok: true, cart: data.carrito };
    } catch (error) {
        console.log({ error });
        return { ok: false, msg: error.response.data.msg };
    }
};

export const deleteProductInCart = async (idCart, idProduct) => {
    try {
        const { data } = await ecommerceApi.delete(`/carts/${idCart}/products/${idProduct}`);
        return { ok: true, cart: data.carrito };
    } catch (error) {
        console.log({ error });
        return { ok: false, msg: error.response.data.msg };
    }
};

export const confirmarCompra = async (idCart) => {
    try {
        const { data } = await ecommerceApi.post(`/carts/${idCart}/purchase`);
        return { ok: true };
    } catch (error) {
        console.log({ error });
        return { ok: false, msg: error.response.data.msg };
    }
};

export const getTickets = async () => {
    try {
        const { data } = await ecommerceApi.get('/tickets');
        return { ok: true, tickets: data.tickets };
    } catch (error) {
        console.log(error);
        return { ok: false };
    }
};

export const referenceId = async (idCart) => {
    try {
        const { data } = await ecommerceApi.post(`/carts/create-preference/${idCart}`);
        console.log({ data });
        return { ok: true, idPreference: data.idPreference };
    } catch (error) {
        console.log({ error });
        return { ok: false, msg: error.response.data.msg };
    }
};