import MyDashboard from "./component/dashboard"
import MyHeader from "./component/header"
import Link from "next/link"

export default function PaymentForm() {
  
  
  return (
    <>
    <MyHeader />
    
    <MyDashboard title="Contract Form"/>
    
    <h2 align="center">Payment Form</h2><br/>
    
    <form align="center">
    
   

   <label for="pno">Your Phone Number:</label>
   <input type="text"></input><br/><br/>

   <label for="rno">Recipients Phone Number:</label>
   <input type="text"></input><br/><br/>

   <label for="pn">Your PIN Number:</label>
   <input type="text"></input><br/><br/>

   <label for="ap">Amount: </label>
   <input type="text"></input><br/><br/>

   <Link href= "/adminprofile"><input type="submit" value="Pay"></input></Link><br/><br/>

   
   
    </form>
    
    
    
      </>
    
  )
}
