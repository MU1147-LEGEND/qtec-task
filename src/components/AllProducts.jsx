import { useContext, useEffect } from "react";
import { api } from "../api/api";
import { ProductContext } from "../context-api/productContext";
import SingleProduct from "./SingleProduct";
import LoadingSkeleton from "./LoadingSkeleton";
import SideCart from "./SideCart";

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
            {state.error && (
                <p>
                    Error: {state.error} - Please make sure JSON server is
                    running locally <code>npm run server</code>
                </p>
            )}
            <div className="">
                <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
                    {state.products.map((product) => (
                        <SingleProduct product={product} key={product.id} />
                    ))}
                </div>
            </div>

            {/* if now products available show the msg
             */}
            {state.products.length === 0 && (
                <p className="text-gray-500 mt-4">No products available.</p>
            )}
        </div>
    );
};
export default AllProducts;
