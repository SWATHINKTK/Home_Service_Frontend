import React from 'react';
import './loader.css';

const MainLoader: React.FC = () => {
    return (
        <div className='flex justify-center items-center h-[100vh]'>

            <div className="loader">
                <div className='flex flex-col items-center justify-center'>
                    <img className='h-10' src='/logo/icon2.png' />
                    <h1 className='mx-4 my-3 font-Montserrat font-bold text-2xl'>Heaven Crew</h1>
                </div>
                <div className="loader-bar"></div>
            </div>
        </div>
    )
    // return (
    //     <div className='flex justify-center items-center h-[100vh]'>
    //         <div>
    //             <div className='flex flex-col items-center justify-center'>
    //                 <img className='h-12' src='/logo/icon2.png' />
    //                 <h1 className='mx-4 my-3 font-Montserrat font-bold text-2xl'>Heaven Crew</h1>
    //             </div>
    //             <div className="container">
    //                 <div className="main-loader"></div>
    //             </div>
    //         </div>
    //     </div>
    // )
}

export default MainLoader
