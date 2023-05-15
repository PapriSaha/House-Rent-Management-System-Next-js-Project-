import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import MyHeader from '@/pages/component/header';
import TenantLayout from '@/pages/component/tenantdata';
import MyDashboard from "@/pages/component/dashboard"
import MyLayout from "@/pages/component/layout"

export default function TenantIDPage({ data }) {
  const [inputValue, setInputValue] = useState();
  const router = useRouter();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    router.push({
      pathname: 'findtenant',
      query: { inputValue: inputValue }
    });
  }

  return (
    <>
      <MyHeader/>
      <MyLayout/>
      <MyDashboard title="Find Tenants"/><br/>
      <div className="p-24 flex justify-center items-center" align="center" style={{ background: 'linear-gradient(204deg, rgba(204,255,229,1) 0%, rgba(204,255,229,1) 100%)' }}>
      <h3 align="center">Find Tenants by ID</h3><br/>
      <form align="center" onSubmit={handleFormSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} /><br/><br/>
        <button type="submit">Search</button>
      </form>
      <h4 align="center">
      {data.status == null? 
   <TenantLayout data={data}/>
      : data.status }
    </h4>
    </div>
      
    </>
  );
}

export async function getServerSideProps({ query }) {
  const inputValue = query.inputValue;
  try {
  const response = await axios.get('https://house-rent-management-system-production.up.railway.app/admin/findtenant/'+inputValue);
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
