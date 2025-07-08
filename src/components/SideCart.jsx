import { useContext } from "react";
import { ProductContext } from "../context-api/productContext";
import {
    handleCheckout,
    handleDecreaseQuantity,
    handleIncreaseQuantity,
} from "../utils/cartActions";
import CheckoutModal from "./CheckoutModal";
import { useState } from "react";

const SideCart = () => {
    const { state, dispatch } = useContext(ProductContext);
    const [checkout, setCheckout] = useState(false);
    const [orderSubmitted, setOrderSubmitted] = useState(false);

    const total = state?.cartedProducts
        ?.reduce(
            (acc, product) => acc + product.price * (product.cartQuantity || 1),
            0
        )
        .toFixed(2);

    const totalItems = state?.cartedProducts?.reduce(
        (acc, product) => acc + (product.cartQuantity || 1),
        0
    );

    return (
        <>
            <div className="w-full m-auto min-h-screen bg-gray-100 shadow-lg p-4">
                <h2 className="text-xl font-semibold mb-4">Cart</h2>
                <p className="text-gray-600">Your cart is empty.</p>

                {state?.cartedProducts?.length > 0 ? (
                    <div className="grid place-items-center">
                        {state.cartedProducts.map((product) => (
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
                                    <h3 className="text-xl font-semibold mb-2 hover:underline text-gray-800">
                                        {product.title}
                                    </h3>
                                    <p className="text-lg font-bold text-green-600">
                                        ${product.price}
                                    </p>
                                </div>
                                <div className="p-2 flex items-center justify-around ">
                                    <button
                                        onClick={() =>
                                            handleDecreaseQuantity(
                                                product,
                                                dispatch
                                            )
                                        }
                                        disabled={product.cartQuantity <= 1}
                                        className="disabled:opacity-50 text-2xl bg-gray-200 px-4 py-0.5"
                                    >
                                        -
                                    </button>
                                    <span className="mx-2">
                                        {product.cartQuantity}
                                    </span>
                                    <button
                                        onClick={() =>
                                            handleIncreaseQuantity(
                                                product,
                                                dispatch
                                            )
                                        }
                                        className="text-2xl bg-gray-200 px-4 py-0.5"
                                    >
                                        +
                                    </button>
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
                        <hr className="my-5" />
                        <div>
                            <h2 className="text-2xl font-semibold">
                                Order Details
                            </h2>
                            <h3 className="text-lg font-semibold mt-4">
                                Total Items: {totalItems}
                            </h3>
                            <h3 className="text-xl font-semibold">
                                Total Price:${total}
                            </h3>
                        </div>
                        <button
                            onClick={() => {
                                handleCheckout(state, setCheckout);
                            }}
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
                        >
                            Checkout
                        </button>
                    </div>
                ) : (
                    <p className="text-gray-500 mt-4">Your cart is empty.</p>
                )}
            </div>
            {checkout && !orderSubmitted && (
                <CheckoutModal dispatch={dispatch} setCheckout={setCheckout} />
            )}
        </>
    );
};
export default SideCart;
