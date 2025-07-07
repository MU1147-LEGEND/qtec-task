export const productState = {
    products: [],
    cartedProducts: [],
    loading: false,
    error: null,
};

export const productReducer = (state = productState, action) => {
    switch (action.type) {
        case "FETCH_PRODUCTS_REQUEST":
            return { ...state, loading: true, error: null };
        case "FETCH_PRODUCTS_SUCCESS":
            return { ...state, loading: false, products: action.payload };
        case "FETCH_PRODUCTS_FAILURE":
            return { ...state, loading: false, error: action.payload };
        case "ADD_TO_CART":
            return {
                ...state,
                cartedProducts: [...state.cartedProducts, action.payload],
            };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cartedProducts: state.cartedProducts.filter(
                    (product) => product.id !== action.payload.id
                ),
            };
        case "CLEAR_CART":
            return {
                ...state,
                cartedProducts: [],
            };
        default:
            return state;
    }
};
