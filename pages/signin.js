import { useState } from 'react'
import axios from 'axios'
import MyLayout from "./component/layout"
import { useRouter } from 'next/router';
import Footer from "./component/footer"

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [pass, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await axios.post('https://house-rent-management-system-production.up.railway.app/admin/signin', { email, pass })
      console.log("res: "+response.data)
      
        sessionStorage.setItem('email', response.data);
        router.push('/adminprofile');

    } catch (error) {
        console.log("error22: "+error.message)
      setError("invalid login")
    }
  }

 
  return (
    <>
      <MyLayout title="Sign IN" />
  
      <div className="p-24 flex justify-center items-center" style={{ background: 'linear-gradient(204deg, rgba(204,255,229,1) 0%, rgba(204,255,229,1) 100%)' }}>
        <section className="text-gray-600 body-font w-96">
          <form onSubmit={handleSubmit} className="bg-gray-100 rounded-lg p-8" align="center">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5 text-center">Sign In</h2>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email :</label>
              <input type="email" id="email" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <br/>
            <div className="relative mb-4">
            <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password:</label>
            <input type="password" id="password" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={pass} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <br/>
            <button type="submit" className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg mx-auto block">Sign In</button>
            {error && (
              <div>
                <p id="outlined_error_help" className="mt-2 text-xs text-red-600 dark:text-red-400"><span className="font-medium">{error}</span></p>
              </div>
            )}
          </form>
        </section>
      </div>
      <br/>
      <Footer/>
    </>
    
  );
            }