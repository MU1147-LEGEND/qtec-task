import { useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import AllProducts from "./components/AllProducts";
import Cart from "./components/Cart";
import HeaderLayout from "./components/HeaderLayout";
import HomePage from "./components/HomePage";
import ProductDetail from "./components/ProductDetail";
import { ProductContext } from "./context-api/productContext";
import { productReducer, productState } from "./reducer/productReducer";

const App = () => {
    const [state, dispatch] = useReducer(productReducer, productState);

    return (
        <ProductContext.Provider value={{ state, dispatch }}>
            <BrowserRouter>
                <Routes>
                    <Route element={<HeaderLayout />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="cart" element={<Cart />} />
                        <Route path="product/:id" element={<ProductDetail />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ProductContext.Provider>
    );
};

export default App;
