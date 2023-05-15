import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import MyHeader from '@/pages/component/header';
import ManagerLayout from '@/pages/component/managerdata';
import MyDashboard from "@/pages/component/dashboard"
import MyLayout from "@/pages/component/layout"
import Link from "next/link"

export default function ManagerPage({ data }) {
  const [inputValue, setInputValue] = useState();
  const router = useRouter();
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }


  const handleFormSubmit = (e) => {
    e.preventDefault();
    router.push({
      pathname: 'findmanager',
      query: { inputValue: inputValue }
    });
  }
  

  return (
    <>
      <MyHeader/>
      <MyLayout/>
      <MyDashboard title="Find Managers"/><br/>
      <div className="p-24 flex justify-center items-center" align="center" style={{ background: 'linear-gradient(204deg, rgba(204,255,229,1) 0%, rgba(204,255,229,1) 100%)' }}>
      <h3 align="center">Find Managers by ID</h3><br/>
      <form align="center" onSubmit={handleFormSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} /><br/><br/>
        <button type="submit">Search</button>
      </form>
      <h4 align="center">
      {data.status == null? 
   <ManagerLayout data={data}/>
      : data.status }
    </h4>
    </div>
    </>
  );
}

export async function getServerSideProps({ query }) {
  const inputValue = query.inputValue;
  try {
  const response = await axios.get('https://house-rent-management-system-production.up.railway.app/admin/findmanager/'+inputValue);
  const data = await response.data;

  return {
    props: {
      data
    }
  };
  
  } catch (error) {

  return {
    props: {
      data: {status:"enter valid user id"}
    }
  };
}
}



