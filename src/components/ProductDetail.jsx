import { useContext, useEffect } from "react";
import { ProductContext } from "../context-api/productContext";
import { useParams } from "react-router";
import { api } from "../api/api";
import LoadingSkeleton from "./LoadingSkeleton";
import { handleAddToCart, handleRemoveFromCart } from "../utils/cartActions";

const ProductDetail = () => {
    const { id } = useParams();

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

    const product =
        state?.products && state.products.find((p) => p.id === parseInt(id));

    if (state.loading) {
        return <LoadingSkeleton />;
    }

    if (!product) {
        return <div className="text-red-500">Product not found</div>;
    }
    return (
        <div className="min-h-screen">
            <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
            <div className="w-full flex items-center justify-between bg-gray-100 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img
                    src={product.image}
                    alt={product.title}
                    className="h-[50vh] w-1/3 object-contain bg-gray-300 hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4 w-2/3">
                    <h3 className="text-xl font-semibold mb-2">
                        {product.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                        {product.description || "No description available."}
                    </p>
                    <p className="text-lg font-semibold mt-4">
                        ${product.price}
                    </p>
                    {product.isCarted ? (
                        <button
                            onClick={() =>
                                handleRemoveFromCart(dispatch, product)
                            }
                            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                            Remove from Cart
                        </button>
                    ) : (
                        <button
                            onClick={() => handleAddToCart(dispatch, product)}
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Add to Cart
                        </button>
                    )}
                </div>
            </div>

            {/* similer products */}
            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Similar Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {state.products
                        .filter((p) => p.id !== product.id)
                        .slice(0, 5)
                        .map((similarProduct) => (
                            <div
                                key={similarProduct.id}
                                className="max-w-[14rem] bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                            >
                                <img
                                    src={similarProduct.image}
                                    alt={similarProduct.title}
                                    className="h-48 w-full object-contain bg-gray-100 hover:scale-105 transition-transform duration-300"
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-2 hover:underline text-gray-800">
                                        {similarProduct.title}
                                    </h3>
                                    <p className="text-lg font-bold text-green-600">
                                        ${similarProduct.price}
                                    </p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};
export default ProductDetail;
