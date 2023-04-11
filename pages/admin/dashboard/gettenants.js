import Link from "next/link"
import MyDashboard from "@/pages/component/dashboard"
import MyHeader from '@/pages/component/header';
import axios from "axios";


export default function GetTenants({ data }) {
    
  return (
      <>
      <MyHeader/>
       <MyDashboard title="Get Tenants"/>
      <h2 align="center">All Tenants</h2>
      <ul align="center">
        {data.map(item => (
          <li key={item.id}>
      
        <Link href={"/admin/dashboard/tenants/"+item.id}>{item.name}</Link>
            </li>
        ))}
      </ul>
    </>
  );
  }
  
 export async function getServerSideProps() {
 
      const response = await axios.get('http://localhost:3000/admin/tenantindex');
      const data = await response.data;
    
  return { props: { data } }
  }