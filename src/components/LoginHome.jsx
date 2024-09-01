import React from 'react'

export default function loginHome() {
  return (

    <div>
    <div className="flex flex-col items-center justify-center min-h-screen">
    <h2 className="text-4xl font-bold mb-6 text-gray-700">Join Our Platform as a Buyer or Seller</h2>  
    <div className="flex flex-col md:flex-row w-full items-center justify-center">
     <div className="w-full md:w-1/4 p-4">
      <div className="text-center mb-3 p-6 border-2 border-green-500 rounded-lg shadow-md">
        <h5 className="text-lg font-bold"></h5>
        <p className="text-gray-600 text-xl">"I’ m a seller, offering high-quality goods for buyer needs."</p>
        <button href="#" className="inline-block mt-3 px-4 py-2 text-lg font-semibold text-green-700 border-2 border-green-600 rounded hover:bg-green-500 hover:text-white transition duration-1000 ease-in-out">
         Signup as seller
        </button>
      </div>
    </div>
  
    <div className="w-full md:w-1/4 p-4">
      <div className="text-center mb-3 p-6 border-2 border-green-500 rounded-lg shadow-md">
        <h5 className="text-lg font-bold"></h5>
        <p className="text-gray-600 text-xl">"I’ m a buyer, looking for high-quality goods for my needs."</p>
        <button href="#" className="inline-block mt-3 px-4 py-2 text-lg font-semibold text-green-700 border-2 border-green-600 rounded hover:bg-green-500 hover:text-white transition duration-1000 ease-in-out">
        Signup as buyer
        </button>
        </div>
      </div>
    </div>
    <div>
     <p className='text-lg'>Already have an account? <a href="" className='text-green-600 text-xl'> Log in</a></p> 
    </div>
   </div>
  </div>
  )
}
