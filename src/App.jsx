import { useReducer } from "react";
import HomePage from "./components/HomePage";
import { ProductContext } from "./context-api/ProductContext";
import { productReducer, productState } from "./reducer/productReducer";
import { BrowserRouter, Route, Routes } from "react-router";
import ProductDetail from "./components/ProductDetail";
import Header from "./components/Header";
import HeaderLayout from "./components/HeaderLayout";
import AllProducts from "./components/AllProducts";
import Cart from "./components/Cart";

const App = () => {
    const [state, dispatch] = useReducer(productReducer, productState);

    return (
        <ProductContext.Provider value={{ state, dispatch }}>
            <BrowserRouter>
                <Routes>
                    <Route element={<HeaderLayout />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="cart" element={<Cart />} />
                        <Route path="products" element={<AllProducts />} />
                        <Route path="product/:id" element={<ProductDetail />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ProductContext.Provider>
    );
};

export default App;
