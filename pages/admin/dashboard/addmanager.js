import { useForm } from 'react-hook-form';
import axios from "axios"
import { useState } from "react"
import MyLayout from "@/pages/component/layout"
import { useRouter } from 'next/router'
import MyDashboard from "@/pages/component/dashboard"

export default function AddAdmin() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const validateFile = (value) => {
        const file = value[0];
        const allowedtypes = ["image/jpg", "image/png"];

        if (!allowedtypes.includes(file.type)){
            return false;
        }
        }

    const [success, setSuccess] = useState('')
    const onSubmit = async (data) => {
        console.log(data);
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('address', data.address);
        
        console.log(formData);
        try {
            const response = await axios.post("https://house-rent-management-system-production.up.railway.app/admin/insertmanager",
                formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
          

            setSuccess('Admin add successfully');
            reset();

        }
        catch (error) {
            console.log(error.response.data.message);
            
            setSuccess('Admin add successfully ');

        }


    };

    return (
        <>
        
          <MyLayout title="Add Manager" />
          <MyDashboard/>
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 py-8">
          <div className="p-24 flex justify-center items-center" align="center" style={{ background: 'linear-gradient(204deg, rgba(204,255,229,1) 0%, rgba(204,255,229,1) 100%)' }}>
              <h1 className="text-3xl font-bold mb-4 text-center text-gray-800" align="center">Add Manager</h1>
              {success}
              <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" className="space-y-4" align="center">
                <div>
                  <label htmlFor="name" className="text-gray-700 font-bold">Name</label>
                  <input
                    type="text"
                    id="uname"
                    {...register('uname', { required: true })}
                    className="border border-purple-400 rounded-md py-2 px-4 w-full"
                  />
                  {errors.uname && <p className="text-red-500">Name is required</p>}
                </div>
                <div>
                  <label htmlFor="email" className="text-gray-700 font-bold">Email</label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', { required: true, pattern: /\S+@\S+\.\S+/ })}
                    className="border border-purple-400 rounded-md py-2 px-4 w-full"
                  />
                  {errors.email && (
                    <p className="text-red-500">
                      {errors.email.type === 'required'
                        ? 'Email is required'
                        : 'Invalid email address'}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="address" className="text-gray-700 font-bold">Address</label>
                  <input
                    type="text"
                    id="address"
                    {...register('address', { required: true })}
                    className="border border-purple-400 rounded-md py-2 px-4 w-full"
                  />
                  {errors.address && <p className="text-red-500">Address is required</p>}
                </div>
                
              <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
                Submit
              </button>
            </form>
            <button type="button" onClick={() => router.back()} className="mt-4 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
              Click here to go back
            </button>
          </div>
        </div>
      </>
    );
                  }          