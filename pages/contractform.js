import MyDashboard from "./component/dashboard"
import MyHeader from "./component/header"
import Link from "next/link"

export default function Contract() {
  
  
  return (
    <>
    <MyHeader />
    
    <MyDashboard title="Contract Form"/>
    
    <h2 align="center">Contract Form</h2><br/>
    
    <form align="center">
    
   <label for="fname">Full Name:</label>
   <input type="text"></input><br/><br/>
 
   <label for="email">Email:</label>
   <input type="text"></input><br/><br/>

   <label for="pn">Phone Number:</label>
   <input type="text"></input><br/><br/>

   <label for="hno">House No:</label>
   <input type="text"></input><br/><br/>

   <label for="rd">Rent Duration:</label>
   <input type="text"></input><br/><br/>

   <label for="td">Tenant ID:</label>
   <input type="text"></input><br/><br/>

   <label for="ap">Advance Payment: </label>
   <input type="text"></input><br/><br/>

   <h4><input type="checkbox"></input>Agree with terms and conditions</h4><br/>

   <Link href= "/adminprofile"><input type="submit" value="CONFIRM"></input></Link><br/><br/>

   
   
    </form>
    
    
    
      </>
    
  )
}
