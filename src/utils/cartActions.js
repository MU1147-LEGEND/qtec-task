// handle add to cart and remove from cart actions
export const handleAddToCart = (dispatch, product) => {
    dispatch({
        type: "ADD_TO_CART",
        payload: product,
    });
};
// handle remove from cart action
export const handleRemoveFromCart = (dispatch, product) => {
    dispatch({
        type: "REMOVE_FROM_CART",
        payload: product,
    });
};
