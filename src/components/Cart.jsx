import { useContext } from "react";
import { ProductContext } from "../context-api/productContext";
import { Link, useNavigate } from "react-router";

const Cart = () => {
    const { state, dispatch } = useContext(ProductContext);
    const { cartedProducts } = state;
    const navigate = useNavigate();
    return (
        <div className="container mx-auto p-4 max-w-7xl">
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
            <p className="text-gray-600">
                You have {cartedProducts.length} item(s) in your cart.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4">
                {cartedProducts.map((product) => (
                    <div
                        key={product.id}
                        className="max-w-[14rem] bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                        <img
                            src={product.image}
                            alt={product.title}
                            className="h-48 w-full object-contain bg-gray-100 hover:scale-105 transition-transform duration-300"
                        />
                        <div className="p-4">
                            <Link to={`/product/${product.id}`}>
                                <h3 className="text-xl font-semibold mb-2 hover:underline text-gray-800">
                                    {product.title}
                                </h3>
                            </Link>
                            <p className="text-lg font-bold text-green-600">
                                ${product.price}
                            </p>
                        </div>
                        <div className="p-4">
                            <button
                                onClick={() =>
                                    dispatch({
                                        type: "REMOVE_FROM_CART",
                                        payload: product,
                                    })
                                }
                                className="w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-300"
                            >
                                Remove from Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* if cart is empty show the message */}
            {cartedProducts.length === 0 && (
                <p className="text-gray-500 mt-4">
                    Your cart is empty. Start shopping!
                    <br />
                    <button
                        onClick={() => navigate("/")}
                        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
                    >
                        Go to Products
                    </button>
                </p>
            )}
        </div>
    );
};
export default Cart;
