import { Link } from "react-router";
import { ProductContext } from "../context-api/productContext";
import { useContext } from "react";
import { handleAddToCart, handleRemoveFromCart } from "../utils/cartActions";

const SingleProduct = ({ product }) => {
    const { dispatch } = useContext(ProductContext);

    
    return (
        // as mentioned in the task card width 200px, i'm using 224px width for the product card
        <div className="max-w-[14rem] bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <Link to={`/product/${product.id}`}>
                <img
                    src={product.image}
                    alt={product.title}
                    className="h-48 w-full object-contain bg-gray-100 hover:scale-105 transition-transform duration-300"
                />
            </Link>
            <div className="p-4">
                <Link to={`/product/${product.id}`}>
                    <h3 className="text-xl font-semibold mb-2 hover:underline text-gray-800 ">
                        {product.title}
                    </h3>
                </Link>
                <div className="flex items-center flex-col justify-between">
                    <div className="text-lg font-bold text-green-600 flex items-center justify-between w-full">
                        <span>${product.price}</span>
                        <span> 4.5⭐ </span>
                    </div>
                    {product.isCarted ? (
                        <button
                        type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                handleRemoveFromCart(dispatch, product);
                            }}
                            className="active:translate-y-1 mt-4 px-4 py-2 bg-red-500 text-white text-base rounded hover:bg-red-600 overflow-hidden w-full"
                        >
                            Remove from Cart
                        </button>
                    ) : (
                        <button
                            onClick={() => handleAddToCart(dispatch, product)}
                            className="w-full active:translate-y-1 mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Add to Cart
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
