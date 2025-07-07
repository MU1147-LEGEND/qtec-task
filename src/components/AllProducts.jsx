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
            {state.error && <p>Error: {state.error} - Please make sure JSON server is running locally</p>}
            <div className="flex items-center justify-center relative">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
                    {state.products.map((product) => (
                        <SingleProduct product={product} key={product.id} />
                    ))}
                </div>

                {/* when the carted product is not empty then the sideabr will appear. */}
                {state?.cartedProducts?.length > 0 && (
                    <div className="h-full w-[20%]">
                        <SideCart />
                    </div>
                )}

                {/* if now products available show the msg
                 */}
            </div>
            {state.products.length === 0 && (
                <p className="text-gray-500 mt-4">No products available.</p>
            )}
        </div>
    );
};
export default AllProducts;
