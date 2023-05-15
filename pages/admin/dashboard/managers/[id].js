import MyLayout from "@/pages/component/layout"
import Image from "next/image";
import axios from "axios";
import { useRouter } from 'next/router'
import SessionCheck from '../../../component/sessioncheck'

export default function ManagerProfile({ data } ) {
const router = useRouter();
    return (
      <>
      <SessionCheck/>
      <MyLayout title="Manager"/>
   

      <h1>Name: {data.name}</h1>
      <h1>Email: {data.email}</h1>
      <h1>Address: {data.address}</h1>
     <br></br>
      <button type="button" onClick={() => router.back()}>
      Click here to go back
    </button>
     
      </>
    )
  }
  
 export async function getServerSideProps(context) {
 const id=context.params.id;

    const response = await axios.get('https://house-rent-management-system-production.up.railway.app/admin/findmanager/'+id);
    const data = await response.data;
   
return { props: { data } }
}