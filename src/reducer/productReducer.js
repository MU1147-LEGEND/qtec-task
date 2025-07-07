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
            return {
                ...state,
                loading: false,
                products: action.payload.map((product) => ({
                    ...product,
                })),
            };
        case "FETCH_PRODUCTS_FAILURE":
            return { ...state, loading: false, error: action.payload };
        case "ADD_TO_CART": {
            if (
                state.cartedProducts.some(
                    (product) => product.id === action.payload.id
                )
            ) {
                return state;
            }

            const updatedProducts = state.products.map((product) =>
                product.id === action.payload.id
                    ? { ...product, isCarted: true }
                    : product
            );
            return {
                ...state,
                products: updatedProducts,
                cartedProducts: [
                    ...state.cartedProducts,
                    { ...action.payload, isCarted: true },
                ],
            };
        }
        case "REMOVE_FROM_CART": {
            const updatedProducts = state.products.map((product) =>
                product.id === action.payload.id
                    ? { ...product, isCarted: false }
                    : product
            );
            return {
                ...state,
                products: updatedProducts,
                cartedProducts: state.cartedProducts.filter(
                    (product) => product.id !== action.payload.id
                ),
            };
        }
        case "CLEAR_CART": {
            const updatedProducts = state.products.map((product) => ({
                ...product,
                isCarted: false,
            }));
            return {
                ...state,
                products: updatedProducts,
                cartedProducts: [],
            };
        }
        default:
            return state;
    }
};
