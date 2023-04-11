import MyLayout from "./component/layout"
import Header from "./component/header"
import Link from "next/link"

export default function Signup() {
    return (
    <>
      <MyLayout title="Signup"/>

      
      <h2 align= "center">Sign Up</h2><br/><br/>
   
   
  <form align="center">
  <label for="fname">Full Name:</label>
  <input type="text"></input><br/><br/>

  <label for="uname">User Name:</label>
  <input type="text"></input><br/><br/>

  <label for="pass">Password:</label>
  <input type="text"></input><br/><br/>

  <label for="cpass">Confirm Password:</label>
  <input type="text"></input><br/><br/>

  <label for="email">Email:</label>
  <input type="text"></input><br/><br/>

  <label for="dob">Date of Birth:</label>
  <input type="text"></input><br/><br/>

  <label for="add">Address:</label>
  <input type="text"></input><br/><br/>

  <label for="img">Upload Image:</label>
  <input type="submit" value="Upload"></input><br/><br/>

  
  <Link href= "/adminprofile"><input type="submit" value="SIGN UP"></input></Link><br/><br/>
 

   </form>
   

   
    </>
   
    )
  }