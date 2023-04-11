
import Image from 'next/image'

export default function HouseLayout({data})   
{
    return(
        <>
      
      <h3>House Name: {data.housename}</h3>
      <h3>House Address: {data.HouseAdd}</h3>
      <h3>Rent Status: {data.RentStatus}</h3>
      <h3>Rent Price: {data.RentPrice}</h3>
      
      
        </>
    )
}