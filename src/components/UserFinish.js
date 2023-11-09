import React, { useState } from "react";
function UserFinish() {
    const [show, setShow] = useState(false);
    return (
        <div className="py-12 overflow-y-hidden bg-gray-100">
            {/* Code block starts */}
            <dh-component>
                <nav className="w-full">
                    <div className="container flex items-center justify-between px-6 mx-auto">
                        <div className="flex items-center" aria-label="Home" role="img">
                            <img className="w-8 cursor-pointer sm:w-auto" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg1.svg" alt="logo" />
                            <p className="ml-2 text-base font-bold text-gray-800 lg:ml-4 lg:text-2xl">InnoByte</p>
                        </div>
                        <div>
                            <button onClick={() => setShow(!show)} className="text-gray-500 sm:block md:hidden lg:hidden hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500">
                                <img className="w-8 h-8" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg4.svg" alt="show" />
                            </button>
                            <div id="menu" className={`md:block lg:block ${show ? '' : 'hidden'}`}>
                                <button onClick={() => setShow(!show)} className="fixed top-0 z-30 block mt-3 text-gray-500 bg-white md:hidden lg:hidden hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 md:bg-transparent">
                                    <img className="w-8 h-8" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg5.svg" alt="hide" />
                                </button>
                                <ul className="fixed top-0 bottom-0 left-0 right-0 z-20 flex flex-col items-center justify-center py-8 text-3xl bg-white md:text-base md:flex md:flex-row md:relative md:bg-transparent">
                                    <li className="pt-10 text-lg text-gray-600 cursor-pointer hover:text-gray-800 md:ml-10 md:pt-0">
                                        <a href="javascript:void(0)">Compañia</a>
                                    </li>
                                    <li className="pt-10 text-lg text-gray-600 cursor-pointer hover:text-gray-800 md:ml-10 md:pt-0">
                                        <a href="javascript:void(0)">Acerca</a>
                                    </li>
                                    <li className="pt-10 text-lg text-gray-600 cursor-pointer hover:text-gray-800 md:ml-10 md:pt-0">
                                        <a href="javascript:void(0)">Contacto</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="w-full px-6">
                    <div className="container relative flex flex-col items-center pt-12 pb-24 mx-auto mt-8 bg-indigo-700 rounded-lg sm:pt-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64">
                        <img className="absolute top-0 right-0 mt-2 mr-2 lg:mr-12 lg:mt-12" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg2.svg" alt="bg" />
                        <img className="absolute bottom-0 left-0 mb-2 ml-2 lg:ml-12 lg:mb-12" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg3.svg" alt="bg" />
                        <div className="w-11/12 mb-5 sm:w-2/3 sm:mb-10">
                            <h1 className="text-2xl font-bold leading-tight text-center text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Tu participacion en la eleccion es importante</h1>
                        </div>
                        <div className="flex items-center justify-center mb-10 sm:mb-20">
                            <button className="px-4 py-1 text-sm text-indigo-700 transition duration-150 ease-in-out bg-white border rounded hover:text-white hover:bg-transparent lg:text-xl hover:border-white focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700 focus:ring-white sm:px-8 sm:py-3">Get Started</button>
                            <button className="px-4 py-1 ml-3 text-sm text-white transition duration-150 ease-in-out bg-transparent border border-white rounded hover:bg-white hover:text-indigo-600 lg:text-xl hover:border-indigo-600 sm:ml-6 focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700 focus:ring-white hover:bg-indigo-700-800 sm:px-8 sm:py-3">Learn More</button>
                        </div>
                    </div>
                    <div className="container flex justify-center mx-auto -mt-20 md:-mt-56 sm:-mt-40">
                        <div className="relative w-11/12 sm:w-2/3">
                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/hero/h_2.png" alt="Sample Page" role="img" />
                        </div>
                    </div>
                </div>
            </dh-component>
            {/* Code block ends */}
        </div>

    );
}

export default UserFinish;
