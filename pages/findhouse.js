import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import MyHeader from '@/pages/component/header';
import HouseLayout from '@/pages/component/housedata';
import MyLayout from "@/pages/component/layout"

export default function MyPage({ data }) {
  const [inputValue, setInputValue] = useState();
  const router = useRouter();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    router.push({
      pathname: 'findhouse',
      query: { inputValue: inputValue }
    });
  }

  return (
    <>
      <MyHeader/>
      <MyLayout title="Search House"/><br/>
      <h3 align="center">Search House by House Name</h3><br/>
      <form align="center" onSubmit={handleFormSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} /><br/><br/>
        <button type="submit">Search</button>
      </form>
      <h4 align="center">
      {data.status == null? 
   <HouseLayout data={data}/>
      : data.status }
    </h4>
      
    </>
  );
}

export async function getServerSideProps({ query }) {
  const inputValue = query.inputValue;
  try {
  const response = await axios.get('https://house-rent-management-system-production.up.railway.app/admin/findhouse/'+inputValue);
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
