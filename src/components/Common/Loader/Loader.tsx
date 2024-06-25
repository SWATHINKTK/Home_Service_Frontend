import React from 'react';
import './loader.css'

const Loader: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-16 h-16 border-8 border-dashed rounded-full animate-spin border-blue-600"></div>
        </div>
    );
};

export default Loader;
