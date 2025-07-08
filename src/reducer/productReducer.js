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
                // checking if the product is already in the cart
                state.cartedProducts.some(
                    (product) => product.id === action.payload.id
                )
            ) {
                return state;
            }

            const updatedProducts = state.products.map((product) =>
                product.id === action.payload.id
                    ? { ...product, isCarted: true, cartQuantity: 1 }
                    : product
            );

            return {
                ...state,
                products: updatedProducts,
                cartedProducts: [
                    ...state.cartedProducts,
                    { ...action.payload, isCarted: true, cartQuantity: 1 },
                ],
            };
        }
        case "REMOVE_FROM_CART": {
            const updatedProducts = state.products.map((product) =>
                product.id === action.payload.id
                    ? { ...product, isCarted: false, cartQuantity: 0 }
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
        case "INCREASE_QUANTITY": {
            const updatedCartedProducts = state.cartedProducts.map((product) =>
                product.id === action.payload.id
                    ? { ...product, cartQuantity: product.cartQuantity + 1 }
                    : product
            );

            const updatedProducts = state.products.map((product) =>
                product.id === action.payload.id
                    ? {
                          ...product,
                          cartQuantity: (product.cartQuantity || 1) + 1,
                      }
                    : product
            );

            return {
                ...state,
                products: updatedProducts,
                cartedProducts: updatedCartedProducts,
            };
        }
        case "DECREASE_QUANTITY": {
            const updatedCartedProducts = state.cartedProducts
                .map((product) =>
                    product.id === action.payload.id
                        ? { ...product, cartQuantity: product.cartQuantity - 1 }
                        : product
                )
                .filter((product) => product.cartQuantity > 0);

            const updatedProducts = state.products.map((product) =>
                product.id === action.payload.id
                    ? {
                          ...product,
                          //   protecting negative cart quantity if the user bypass the client side logic this will prevent from going negative
                          cartQuantity: Math.max(
                              (product.cartQuantity || 1) - 1,
                              0
                          ),
                          isCarted: (product.cartQuantity || 1) - 1 > 0,
                      }
                    : product
            );

            return {
                ...state,
                products: updatedProducts,
                cartedProducts: updatedCartedProducts,
            };
        }
        default:
            return state;
    }
};
