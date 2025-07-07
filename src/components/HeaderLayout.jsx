import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const HeaderLayout = () => {
    return (
        <>
            <Header />
            <div className="container mx-auto p-4 max-w-7xl">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};
export default HeaderLayout;
