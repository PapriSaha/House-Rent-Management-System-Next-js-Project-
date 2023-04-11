import MyDashboard from "./component/dashboard"
import MyHeader from "./component/header"
import Link from "next/link"

export default function AddHouse() {
  
  
  return (
    <>
    <MyHeader />
    
    <MyDashboard title="Add House"/>
    
    <h2 align="center">Add House</h2><br/>
    
    <form align="center">
    
   <label for="hname">House Name:</label>
   <input type="text"></input><br/><br/>

   <label for="hno">House address:</label>
   <input type="text"></input><br/><br/>
 
   <label for="comp">Is there a compartment? </label>
   <input type="text"></input><br/><br/>

   <label for="rn">Rent of the House:</label>
   <input type="text"></input><br/><br/>

   <Link href= "/adminprofile"><input type="submit" value="Add the House"></input></Link><br/><br/>

   
   
    </form>
    
    
    
      </>
    
  )
}
