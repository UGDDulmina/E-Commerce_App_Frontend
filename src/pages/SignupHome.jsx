import React from 'react';
import { Link } from 'react-router-dom';

export default function SignupHome() {
  return (

    <div>
    <div className="flex flex-col items-center justify-center min-h-screen">
    <h2 className="text-4xl font-bold mb-6 text-gray-700">Join Our Platform as a Buyer or Seller</h2>  
    <div className="flex flex-col md:flex-row w-full items-center justify-center">
     <div className="w-full md:w-1/4 p-4">
      <div className="text-center mb-3 p-6 border-2 border-green-500 rounded-lg shadow-md">
        <h5 className="text-lg font-bold"></h5>
        <p className="text-gray-600 text-xl">"I’ m a seller, offering high-quality goods for buyer needs."</p>
        <Link to="/SignupAsSeller">
              <button className="inline-block mt-3 px-4 py-2 text-lg font-semibold text-green-700 border-2 border-green-600 rounded hover:bg-green-500 hover:text-white transition duration-1000 ease-in-out">
                Signup as Seller
              </button>
       </Link>
      </div>
    </div>
  
    <div className="w-full md:w-1/4 p-4">
      <div className="text-center mb-3 p-6 border-2 border-green-500 rounded-lg shadow-md">
        <h5 className="text-lg font-bold"></h5>
        <p className="text-gray-600 text-xl">"I’ m a buyer, looking for high-quality goods for my needs."</p>
        <Link to="/SignupAsBuyer">
              <button className="inline-block mt-3 px-4 py-2 text-lg font-semibold text-green-700 border-2 border-green-600 rounded hover:bg-green-500 hover:text-white transition duration-1000 ease-in-out">
                Signup as Buyer
              </button>
       </Link>
        </div>
      </div>
    </div>
   </div>
  </div>
  )
}
