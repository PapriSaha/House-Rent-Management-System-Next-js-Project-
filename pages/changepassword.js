import MyDashboard from "./component/dashboard"
import MyHeader from "./component/header"
import Link from "next/link"

export default function ChangePassword() {
  
  
  return (
    <>
    <MyHeader />
    
    <MyDashboard title="Change Password"/>
    
    <h2 align="center">Change Password</h2><br/>

    <form align="center">
    
   <label for="uname">User Name:</label>
   <input type="text"></input><br/><br/>
 
   <label for="pass">Password:</label>
   <input type="text"></input><br/><br/>

   <label for="cpass">Confirm Password:</label>
   <input type="text"></input><br/><br/>

   <Link href= "/adminprofile"><input type="submit" value="Change Password"></input></Link><br/><br/>

   
   
    </form>
    
    
    
      </>
    
  )
}
