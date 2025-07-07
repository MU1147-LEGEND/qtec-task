import { useContext, useEffect } from "react";
import { api } from "../api/api";
import { ProductContext } from "../context-api/productContext";
import SingleProduct from "./SingleProduct";
import LoadingSkeleton from "./LoadingSkeleton";

const AllProducts = () => {
    const { state, dispatch } = useContext(ProductContext);

    useEffect(() => {
        const fetchProducts = async () => {
            dispatch({ type: "FETCH_PRODUCTS_REQUEST" });
            try {
                const response = await api();
                if (response.status === 200) {
                    dispatch({
                        type: "FETCH_PRODUCTS_SUCCESS",
                        payload: response.data,
                    });
                } else {
                    console.error("Failed to fetch products");
                }
            } catch (error) {
                dispatch({
                    type: "FETCH_PRODUCTS_FAILURE",
                    payload: error.message,
                });
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, [dispatch]);

    return (
        <div>
            <h1 className="text-2xl mb-5">All Products</h1>
            {state.loading && <LoadingSkeleton />}
            {state.error && <p>Error: {state.error}</p>}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-4">
                {state.products.map((product) => (
                    <SingleProduct product={product} key={product.id} />
                ))}
            </div>
        </div>
    );
};
export default AllProducts;
