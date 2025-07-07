import { Link } from "react-router";

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4 sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center w-4/5">
                <Link to="/" >
                    <h1 className="text-2xl font-bold">Qtec Store</h1>
                </Link>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link to="/" className="hover:underline">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/products" className="hover:underline">
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link to="/cart" className="hover:underline">
                                Cart
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
export default Header;
