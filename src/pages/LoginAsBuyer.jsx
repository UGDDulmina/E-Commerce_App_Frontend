import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { loginBuyer } from '../service/buyer';

export default function LoginPage() {

const [formData, setFormData] = useState({
    email:"",
    password:""
});

const [error, setError] = useState("")

const handleChange = (e) => {
    const {name , value } = e.target;

    setFormData(
        {
            ...formData,
            [name]: value,
        }
    )
}

const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData) {
        setError("Please fill all fields!");
    } else {
        setError("");
        try {
            const res = await loginBuyer(formData);
            console.log(res);
        } catch (error) {
            console.error('Error saving seller data:', error);
            setError('Invalied credentials!');
        }
    }
}



  return (
    <div>
        <div className='flex flex-col md:w-full items-center justify-center min-h-screen'>
            <div className='mb- text-lg flex justify-center  text-gray-700'>
            Don't have an account?  <Link to="/"> <button className='ml-1 text-green-600 underline'>Signup</button></Link>
           </div>
          
        <form 
        onSubmit={handleSubmit} 
        className="space-y-4  w-full md:w-1/2 lg:w-1/3 flex flex-col justify-center shadow-md p-5">
         <div >
          
         <label htmlFor="email" className="block font-medium text-gray-700">
           Email
         </label>
         <input
           type="email"
           name="email"
           id="email"
           value={formData.email}
           onChange={handleChange}
           required
           className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
         />
       </div>

       <div>
         <label htmlFor="password" className="block font-medium text-gray-700">
           Password
         </label>
         <input
           type="password"
           name="password"
           id="password"
           value={formData.password}
           onChange={handleChange}
           required
           className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
         />
       </div>

       {error && (
          <div className="text-red-500 text-sm mt-2">
            {error}
          </div>
        )}

       <div className='flex justify-center '>
         <button
           type="submit"
           className="w-1/2 py-2 px-4 bg-green-600 text-white font-semibold rounded-md shadow-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-800 ease-in-out mt-4"
         >
           Login
         </button>
       </div>
     </form>
     </div>
     </div> 
  )
}
