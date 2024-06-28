import React from 'react'

const MainLoader: React.FC = () => {
    return (
        <div className='flex justify-center items-center h-[100vh]'>
            <div className="main-loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <h1 className='mx-4 my-2 font-Montserrat font-bold text-2xl'>Heaven Crew</h1>
        </div>
        </div>
    )
    // return (
    //     <div className='flex justify-center items-center h-[100vh]'>
    //         <div className="container">
    //             <div className="main-loader"></div>
    //         </div>
    //     </div>
    // )
}

export default MainLoader
