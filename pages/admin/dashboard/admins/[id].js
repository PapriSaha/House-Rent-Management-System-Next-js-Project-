import MyLayout from "@/pages/component/layout"
import Image from "next/image";
import axios from "axios";
import { useRouter } from 'next/router'
import SessionCheck from '../../../component/sessioncheck'

export default function TenantProfile({ data } ) {
const router = useRouter();
    return (
      <>
      <SessionCheck />
      <MyLayout title="Admin"/>
      <MyLayout data={data} /> 
   
   

      <h1>Name: {data.uname}</h1>
      <h1>Email: {data.email}</h1>
      <h1>Address: {data.address}</h1>
      <h1>Date of Birth: {data.dob}</h1>
      <h1>Picture: </h1>
      <Image src={"https://house-rent-management-system-production.up.railway.app/admin/getimage/"+data.filename} alt="me" width="150" height="150" />
     <br></br>
      <button type="button" onClick={() => router.back()}>
      Click here to go back
    </button>
     
      </>
    )
  }
  
 export async function getServerSideProps(context) {
 const id=context.params.id;

    const response = await axios.get('https://house-rent-management-system-production.up.railway.app/admin/findadmin/'+id);
    const data = await response.data;
   
return { props: { data } }
}