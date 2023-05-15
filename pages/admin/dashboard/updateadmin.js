import { useForm } from 'react-hook-form';
import axios from "axios";
import React, { useEffect, useState } from 'react';
import MyLayout from "@/pages/component/layout";
import MyDashboard from "@/pages/component/dashboard";
import { useRouter } from 'next/router';
import SessionCheck from '../../component/sessioncheck';

export default function UpdateAdmin() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm();
  
  const validateFile = (value) => {
    const file = value[0];
    const allowedtypes = ["image/jpg", "image/png"];

    if (!allowedtypes.includes(file.type)) {
      return false;
    }
    return true;
  };

  const [success, setSuccess] = useState('');
  const [adminData, setAdminData] = useState(null);

  useEffect(() => {
    // Fetch admin data to pre-fill the form
    const fetchAdminData = async () => {
      try {
        const response = await axios.get("https://house-rent-management-system-production.up.railway.app/admin/findadmin");
        const data = response.data;
        // Set form field values
        setValue('uname', data.uname);
        setValue('email', data.email);
        setValue('pass', data.pass);
        setValue('address', data.address);
        setValue('dob', data.dob);
        setAdminData(data);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };

    fetchAdminData();
  }, [setValue]);

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

    if (adminData) {
      try {
        const response = await axios.put(`https://house-rent-management-system-production.up.railway.app/admin/updateadmin/${adminData.id}`,
          formData, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          });

        setSuccess('Admin updated successfully');
        reset();

      } catch (error) {
        console.log(error.response.data.message);
        setSuccess('Admin update successfully');
      }
    }
  };

  return (
    <>
      <SessionCheck />
      <MyLayout title="Update Admin" />
      <MyDashboard/>
      <div className="p-24 flex justify-center items-center" align="center" style={{ background: 'linear-gradient(204deg, rgba(204,255,229,1) 0%, rgba(204,255,229,1) 100%)' }}>
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" align="center">
        <h3>Update Admin</h3>
        {success && <p>{success}</p>}
        <div>
          <label htmlFor="uname">Name :</label>
          <input
            type="text"
            id="uname"
            {...register('uname', { required: true })}
          />
          {errors.uname && <p>Name is required</p>}
       </div>
       <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            {...register('email', { required: true, pattern: /\S+@\S+\.\S+/ })}
          />
          {errors.email && (
            <p>
              {errors.email.type === 'required'
                ? 'Email is required'
                : 'Invalid email address'}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="pass">Password</label>
          <input
            type="password"
            id="pass"
            {...register('pass', { required: true, minLength: 5 })}
          />
          {errors.pass && (
            <p>
              {errors.pass.type === 'required'
                ? 'Password is required'
                : 'Invalid password pattern'}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            {...register('address', { required: true })}
          />
          {errors.address && <p>Address is required</p>}
        </div>
        <div>
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="text"
            id="dob"
            {...register('dob', { required: true })}
          />
          {errors.dob && <p>Date of Birth is required</p>}
        </div>
        
        <div>
          <label htmlFor="filename">File</label>
          <input
            type="file"
            id="filename"
            {...register('filename', { required: true, validate: validateFile })}
          />
          {errors.filename && (
            <p>
              {errors.filename.type === 'required'
                ? 'File is required'
                : 'Invalid file'}
            </p>
          )}
        
</div>
        <button type="submit">Submit</button>
        <br />
        <button type="button" onClick={() => router.back()}>
          Click here to go back
        </button>
        
      </form>
      </div>
    </>
  );
}
