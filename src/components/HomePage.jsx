import { useContext, useState } from "react";
import { ProductContext } from "../context-api/productContext";
import AllProducts from "./AllProducts";
import SideCart from "./SideCart";

const HomePage = () => {
    const { state } = useContext(ProductContext);
    const [openCart, setOpenCart] = useState(true);

    const toggleCart = () => {
        setOpenCart(!openCart);
    };

    const isCartCanOpen = state?.cartedProducts?.length > 0 && openCart;

    return (
        <>
            <div className="container mx-auto p-4 max-w-7xl">
                <AllProducts />
                <div
                    className={`${
                        isCartCanOpen > 0 ? "h-screen w-[20%]" : "w-0"
                    } fixed top-0 right-0 bg-white shadow-lg z-50 transition-all duration-300 overflow-auto`}
                >
                    <button
                        onClick={toggleCart}
                        className="fixed top-4 right-4 bg-yellow-500 hover:text-gray-700 px-3 py-1 text-center text-black text-2xl font-bold rounded-full transition-colors duration-300"
                    >
                        {isCartCanOpen ? ">" : "<"}
                    </button>

                    {/* ------------------ */}

                    <SideCart />
                </div>
            </div>
        </>
    );
};
export default HomePage;
