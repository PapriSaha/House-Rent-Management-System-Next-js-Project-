import Link from "next/link"
import MyDashboard from "@/pages/component/dashboard"
import MyHeader from '@/pages/component/header';
import MyLayout from '@/pages/component/layout';
import axios from "axios";


export default function GetTenants({ data }) {
    
  return (
      <>
      <MyHeader/><MyLayout/>
       <MyDashboard title="Get Tenants"/>
       <div className="p-24 flex justify-center items-center" align="center" style={{ background: 'linear-gradient(204deg, rgba(204,255,229,1) 0%, rgba(204,255,229,1) 100%)' }}>
      <h2>All Tenants</h2>
      <ul>
        {data.map(item => (
          <p key={item.id}>
      
        <Link href={"/admin/dashboard/tenants/"+item.id}>{item.name}</Link>
        </p>
        ))}
      </ul>
      </div>
    </>
  );
  }
  
 export async function getServerSideProps() {
 
      const response = await axios.get('https://house-rent-management-system-production.up.railway.app/admin/tenantindex');
      const data = await response.data;
    
  return { props: { data } }
  }