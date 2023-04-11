
import Image from 'next/image'

export default function TenantLayout({data})   
{
    return(
        <>
      
      <h3>Name: {data.name}</h3>
      <h3>User Name: {data.uname}</h3>
      <h3>Email: {data.email}</h3>
      <h3>Address: {data.address}</h3>
      <h3>Date of Birth: {data.dob}</h3>
      <h3>Picture: </h3>
      <Image src={"http:/localhost:3000/admin/getimage/"+data.filename} alt="me" width="150" height="150" />
        </>
    )
}