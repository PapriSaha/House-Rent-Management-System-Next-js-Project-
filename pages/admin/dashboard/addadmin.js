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
        formData.append('uname', data.uname);
        formData.append('email', data.email);
        formData.append('pass', data.pass);
        formData.append('address', data.address);
        formData.append('dob', data.dob);
        formData.append('filename', data.filename[0]);
        console.log(formData);
        try {
            const response = await axios.post("https://house-rent-management-system-production.up.railway.app/admin/signup",
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
            
            setSuccess('Admin add unsuccessfull ' + error.response.data.message);

        }


    };

    return (
        <>
        
          <MyLayout title="Add Admin" />
          <MyDashboard/>
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 py-8">
          <div className="p-24 flex justify-center items-center" align="center" style={{ background: 'linear-gradient(204deg, rgba(204,255,229,1) 0%, rgba(204,255,229,1) 100%)' }}>
              <h1 className="text-3xl font-bold mb-4 text-center text-gray-800" align="center">Add Admin</h1>
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
                  <label htmlFor="pass" className="text-gray-700 font-bold">Password</label>
                  <input
                    type="password"
                    id="pass"
                    {...register('pass', { required: true, minLength: 5 })}
                    className="border border-purple-400 rounded-md py-2 px-4 w-full"
                  />
                  {errors.pass && (
                    <p className="text-red-500">
                      {errors.pass.type === 'required'
                        ? 'Password is required'
                        : 'Invalid password pattern'}
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
                <div>
                  <label htmlFor="dob" className="text-gray-700 font-bold">Date of Birth</label>
                  <input
                    type="text"
                    id="dob"
                    {...register('dob', { required: true })}
                    className="border border-purple-400 rounded-md py-2 px-4 w-full"
                  />
                  {errors.dob && <p className="text-red-500">Date of Birth is required</p>}
                </div>
                <div>
                  <label htmlFor="filename" className="text-gray-700 font-bold">File</label>
                  <input
                    type="file"
                    id="filename"
                    {...register('filename', { required: true, validate: validateFile })}
                    className="border border-purple-400 rounded-md py-2 px-4 w-full"
                  />
                  {errors.filename && (
                    <p className="text-red
                    500">
                    {errors.filename.type === 'required'
                      ? 'File is required'
                      : 'Invalid file'}
                  </p>
                )}
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