import { useDispatch, useSelector } from "react-redux";
import { createProduct, getProducts, deleteProduct, getProductbyId, updateProduct } from "../api/requestApi";
import { onPagination, onProduct, onProducts, onDeleteProduct, onUpdateProduct } from "../store/productSlice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const useProductStore = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { product, products, pagination } = useSelector(state => state.product);

    const startGetProducts = async (page) => {
        const resp = await getProducts(page);
        if (resp.ok) {
            const { pagination, products } = resp;
            dispatch(onProducts(products));
            dispatch(onPagination(pagination));
            return;
        };

        return Swal.fire({
            title: "Ocurrio un error al obtener los productos",
            html: "Por favor intentarlo mas tarte",
            icon: "error",
        });
    };

    const startGetProductById = async (id) => {
        const resp = await getProductbyId(id);
        if (resp.ok) {
            const { product } = resp;
            startProductActivo(product);
            return;
        };

        return Swal.fire({
            title: "Para realizar una compra.. Debe estar loggeado",
            html: "Por favor cree su usuario o ingrese con su email y contraseña",
            icon: "error",
        }).then((result) => navigate("/auth/login"));
    };

    const startProductActivo = (producto) => {
        dispatch(onProduct(producto))
    };

    const startCreateProduct = async (producto) => {
        const resp = await createProduct(producto);

        if (resp.ok) return startProductActivo(resp.producto);

        Swal.fire({
            title: "Uhh ocurrio un error al crear el producto",
            html: resp.msg,
            icon: "error",
        });

        return false;
    };

    const startDeleteProduct = async (idProduct) => {
        const resp = await deleteProduct(idProduct);

        if (resp.ok) return dispatch(onDeleteProduct(idProduct));

        Swal.fire({
            title: "Uhh ocurrio un error al eliminar el producto",
            html: resp.msg,
            icon: "error",
        });

        return false;
    };

    const startUpdateProduct = async (id, values) => {
        const resp = await updateProduct(id, values);

        if (resp.ok) {
            Swal.fire({
                title: "Prodcuto actualizado!",
                icon: "success",
            });
            return onUpdateProduct(resp.producto);
        }

        Swal.fire({
            title: "Uhh ocurrio un error al actualizar el producto",
            html: resp.msg,
            icon: "error",
        });
    };

    return {
        product,
        products,
        pagination,

        startGetProducts,
        startProductActivo,
        startCreateProduct,
        startDeleteProduct,
        startUpdateProduct,
        startGetProductById,
    };
};
