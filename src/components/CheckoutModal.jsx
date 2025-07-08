const CheckoutModal = ({ setOrderSubmitted }) => {
    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-gray-800
        bg-opacity-75 z-50"
        >
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        alert(
                            "Order submitted. We'll Process the product ASAP!"
                        );
                        setOrderSubmitted(true);
                    }}
                >
                    <p className="text-gray-600 mb-4">
                        Please fill in your details to complete the order.
                    </p>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Address
                        </label>
                        <textarea
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your address"
                            rows="3"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300"
                    >
                        Submit Order
                    </button>
                </form>
            </div>
        </div>
    );
};
export default CheckoutModal;
