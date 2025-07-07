const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4 mt-8">
            <div className="container mx-auto text-center w-4/5">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Qtec Task. All rights
                    reserved.
                </p>
            </div>
        </footer>
    );
};
export default Footer;
