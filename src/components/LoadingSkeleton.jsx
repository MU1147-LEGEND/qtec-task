const LoadingSkeleton = () => {
    return (
        <div className="max-w-4xl m-auto bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="h-48 w-full bg-gray-200 animate-pulse"></div>
            <div className="p-4">
                <div className="h-6 bg-gray-200 mb-2 animate-pulse"></div>
                <div className="h-4 bg-gray-200 mb-2 animate-pulse"></div>
                <div className="flex items-center justify-between">
                    <div className="h-6 bg-gray-200 w-16 animate-pulse"></div>
                    <div className="h-6 bg-gray-200 w-16 animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};
export default LoadingSkeleton;
