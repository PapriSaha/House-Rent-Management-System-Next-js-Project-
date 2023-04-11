import MyLayout from "./component/layout"
import MyHeader from "./component/header"
import Link from "next/link"

export default function Home() {
  const names = ['Gulshan', 'Bashundhara', 'Banani','Dhanmandi','Mirpur','Uttara','Baridhara'];
  
  return (
    <>
    <MyHeader />
    
    <MyLayout title="Home"/>



    <br/><br/>

    <h3><Link href="./findhouse">Search Houses</Link></h3><br/>
    <h3>Explore Areas</h3>
    <ul >
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      </>
    
  )
}
