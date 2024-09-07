import React, {useState} from 'react';
import { saveBuyer } from '../service/buyer';



export default function LoginAsBuyer() {


const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email:"",
    password:"",
});

const onSubmit = async () => 
{
const res = await saveBuyer({
  ...formData
})

console.log(res)
}



const [error, setError] = useState("");

const handleChange = (e) => {
    const { name , value } = e.target;

    setFormData(
        {
            ...formData,
            [name]: value,
        }
    )
}

const validatePassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength) {
      return `Password must be at least ${minLength} characters long.`;
    }
    if (!hasUpperCase) {
      return "Password must contain at least one uppercase letter.";
    }
    if (!hasLowerCase) {
      return "Password must contain at least one lowercase letter.";
    }
    if (!hasNumber) {
      return "Password must contain at least one number.";
    }
    if (!hasSpecialChar) {
      return "Password must contain at least one special character.";
    }
    return "";
  };


const handleSubmit = (e) => {
    e.preventDefault();
    const passwordError = validatePassword(formData.password);

    if (passwordError) {
      setError(passwordError);
    } else {
      setError("");
      console.log("Form Data:", formData);
    }

}


  return (
    <div>
        <div className='flex flex-col md:w-full items-center justify-center min-h-screen'>
            <div className='mb-10 text-2xl flex justify-center font-bold text-gray-700'>
               Sign up for, buying high-quality goods.
           </div>
          
        <form 
        onSubmit={handleSubmit} 
        className="space-y-4  w-full md:w-1/2 lg:w-1/3 flex flex-col justify-center shadow-md p-5">
         <div >
         <label htmlFor="firstName" className="block font-medium text-gray-700 ">
           First Name
         </label>
         <input
           type="text"
           name="firstName"
           id="firstName"
           value={formData.firstName}
           onChange={handleChange}
           required
           className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
         />
        </div>

       <div >
         <label htmlFor="lastName" className="block font-medium text-gray-700">
           Last Name
         </label>
         <input
           type="text"
           name="lastName"
           id="lastName"
           value={formData.lastName}
           onChange={handleChange}
           required
           className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
         />
       </div>

       <div>
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
           onClick={onSubmit}
           type="submit"
           className="w-1/2 py-2 px-4 bg-green-600 text-white font-semibold rounded-md shadow-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-800 ease-in-out mt-4"
         >
           Create an Account
         </button>
       </div>
     </form>
     </div>
     </div> 

    
  )
}
