import {createSlice} from '@reduxjs/toolkit';

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        product: null,
        products: null,
        pagination: null,
    },
    reducers: {
        onProduct: (state, { payload }) => {
            state.product = payload
        },
        onProducts: (state, { payload }) => {
            state.products = payload;
        },
        onPagination: (state, { payload }) => {
            state.pagination = payload;
        },
        onResetProduct: (state) => {
            state.pagination = null;
            state.product = null;
            state.products = null;
        }
    },
});

export const {onProduct, onProducts, onPagination,onResetProduct} = productSlice.actions;