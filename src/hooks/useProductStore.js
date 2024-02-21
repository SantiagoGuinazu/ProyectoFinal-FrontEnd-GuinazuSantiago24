import { useDispatch, useSelector } from "react-redux";
import { createProduct, getProducts } from "../api/requestApi";
import { onPagination, onProduct, onProducts } from "../store/productSlice";

export const useProductStore = () => {

    const dispatch = useDispatch();
    const {product, products, pagination} = useSelector(state=>state.product)

    const startGetProducts = async() =>{
        const resp = await getProducts();
        if (resp.ok) {
            const {pagination,products} = resp;
            dispatch(onProducts(products));
            dispatch(onPagination(pagination));
            return;
        };

        return Swal.fire({
            title: 'Ocurrio un error al obtener los productos',
            html: 'Por favor intentarlo mas tarte',
            icon: 'error',
        });
    }
    
    const startProductActivo = (producto) => {
        dispatch(onProduct(producto))
    }

    const startCreateProduct = async(producto) => {
        const resp = await createProduct(producto);
        if(resp.ok){
            startProductActivo(producto);
            return
        }
    }

    return {
        product, 
        products, 
        pagination,
        startGetProducts,
        startProductActivo,
        startCreateProduct,
    };
}
