import { api } from "../api/api";

// handle add to cart and remove from cart actions
export const handleAddToCart = async (dispatch, product) => {
    const productId = product.id;
    dispatch({
        type: "ADD_TO_CART",
        payload: product,
    });

    // Update the product's isCarted status in the backend

    // await api.patch(`/${productId}`, {
    //     isCarted: true,
    // });
};
// handle remove from cart action
export const handleRemoveFromCart = async (dispatch, product) => {
    const productId = product.id;
    dispatch({
        type: "REMOVE_FROM_CART",
        payload: product,
    });

    // Update the product's isCarted status in the backend
    // await api.patch(`/${productId}`, {
    //     isCarted: false,
    // });
};

export const handleIncreaseQuantity = (product, dispatch) => {
    dispatch({
        type: "INCREASE_QUANTITY",
        payload: product,
    });
    console.log(product);
};
export const handleDecreaseQuantity = (product, dispatch) => {
    if (product.cartQuantity <= 1) {
        // If quantity becomes 0, remove from cart
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: product,
        });
    } else {
        dispatch({
            type: "DECREASE_QUANTITY",
            payload: product,
        });
    }
};

export const handleCheckout = (state, setCheckout) => {
    if (state.cartedProducts.length === 0) {
        alert("Your cart is empty. Please add items to your cart.");
        return;
    }
    setCheckout(true);
};
