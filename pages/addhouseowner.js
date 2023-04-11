import MyDashboard from "./component/dashboard"
import MyHeader from "./component/header"
import Link from "next/link"

export default function AddOwner() {
  
  
  return (
    <>
    <MyHeader />
    
    <MyDashboard title="Add House Owner"/>
    
    <h2 align="center">Add House Owner</h2><br/>
    
    <form align="center">
    

  <label for="fname">Full Name:</label>
  <input type="text"></input><br/><br/>

  <label for="uname">User Name:</label>
  <input type="text"></input><br/><br/>

  <label for="email">Email:</label>
  <input type="text"></input><br/><br/>

  <label for="dob">Date of Birth:</label>
  <input type="text"></input><br/><br/>

  <label for="add">Address:</label>
  <input type="text"></input><br/><br/>

  <label for="img">Upload Image:</label>
  <input type="submit" value="Upload"></input><br/><br/>

   <Link href= "/adminprofile"><input type="submit" value="Add House Owner"></input></Link><br/><br/>

   
   
    </form>
    
    
    
      </>
    
  )
}
