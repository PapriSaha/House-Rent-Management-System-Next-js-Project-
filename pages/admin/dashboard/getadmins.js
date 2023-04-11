import Link from "next/link"
import MyDashboard from "@/pages/component/dashboard"
import MyHeader from '@/pages/component/header';
import axios from "axios";


export default function GetAdmins({ data }) {
    
  return (
      <>
      <MyHeader/>
       <MyDashboard title="Get Admins"/>
      <h2 align="center">All Admins</h2>
      <ul align="center">
        {data.map(item => (
          <li key={item.id}>
      
        <Link href={"/admin/dashboard/admins/"+item.id}>{item.uname}</Link>
            </li>
        ))}
      </ul>
    </>
  );
  }
  
 export async function getServerSideProps() {
 
      const response = await axios.get('http://localhost:3000/admin/adminindex');
      const data = await response.data;
    
  return { props: { data } }
  }