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
