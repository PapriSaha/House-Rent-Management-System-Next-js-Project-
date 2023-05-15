
import Image from 'next/image'

export default function AdminLayout({data})   
{
    return(
        <>
      
      <h3>Name: {data.uname}</h3>
      <h3>Password:{data.pass}</h3>
      <h3>Email: {data.email}</h3>
      <h3>Address: {data.address}</h3>
      <h3>Date of Birth: {data.dob}</h3>
      <h3>Picture: </h3>
      <Image src={"https://house-rent-management-system-production.up.railway.app/admin/getimage/"+data.filename} alt="me" width="150" height="150" />
        </>
    )
}