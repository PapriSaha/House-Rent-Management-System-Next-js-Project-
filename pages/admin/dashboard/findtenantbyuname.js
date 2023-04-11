import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import MyHeader from '@/pages/component/header';
import TenantLayout from '@/pages/component/tenantdata';
import MyDashboard from "@/pages/component/dashboard"

export default function TenantPage({ data }) {
  const [inputValue, setInputValue] = useState();
  const router = useRouter();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    router.push({
      pathname: 'findtenantbyuname',
      query: { inputValue: inputValue }
    });
  }

  return (
    <>
      <MyHeader/>
      <MyDashboard title="Find Tenants by User Name"/><br/>
      <h3 align="center">Find Tenants by User Name</h3><br/>
      <form align="center" onSubmit={handleFormSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} /><br/><br/>
        <button type="submit">Search</button>
      </form>
      <h3 align="center">
      {data.status == null? 
   <TenantLayout data={data}/>
      : data.status }
    </h3>
      
    </>
  );
}

export async function getServerSideProps({ query }) {
  const inputValue = query.inputValue;
  try {
  const response = await axios.get('http://localhost:3000/admin/findtenantbyuname/'+inputValue);
  const data = await response.data;

  return {
    props: {
      data
    }
  };
  
  } catch (error) {

  return {
    props: {
      data: {status:"enter valid user name"}
    }
  };
}
}
