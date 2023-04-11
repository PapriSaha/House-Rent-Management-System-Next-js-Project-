
import Image from 'next/image'

export default function ManagerLayout({data})   
{
    return(
        <>
      
      <h3>Name: {data.name}</h3>
      <h3>Email: {data.email}</h3>
      <h3>Address: {data.address}</h3>
        </>
    )
}