import MyLayout from "./component/layout"
import MyHeader from "./component/header"
import Link from "next/link"

export default function ForgetPassword() {
    return (
      <>
      
      <MyLayout title="Forget Password"/>
       
    <h2 align= "center">Forget Password</h2><br/><br/>
   
   <form align="center">
    
   <label for="email">Email:</label>
   <input type="text"></input><br/><br/>
 
   <input type="submit" value="Send Verification Code through Email"></input><br/><br/>

   <label for="code">Verification Code:</label>
   <input type="text"></input><br/><br/>

   <Link href= "/adminprofile"><input type="submit" value="Confirm"></input></Link><br/><br/>

   
   
    </form>
 
      
      </>
    )
  }
  