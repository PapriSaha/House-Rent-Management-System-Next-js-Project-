import MyLayout from "./component/layout"
import MyHeader from "./component/header"
import Link from "next/link"

export default function Signin() {
    return (
      <>
      
      <MyLayout title="Sign in"/>
       
    <h2 align= "center">Sign In</h2><br/><br/>
   
   <form align="center">
    
   <label for="email">Email:</label>
   <input type="text"></input><br/><br/>
 
   <label for="pass">Password:</label>
   <input type="text"></input><br/><br/>

   <Link href= "/adminprofile"><input type="submit" value="SIGN IN"></input></Link><br/><br/>

   <h4><Link href="/forgetpassword">Forget Password?</Link></h4><br/>

   <h4><Link href="/signup">Create an account!</Link></h4>
   
    </form>
 
      
      </>
    )
  }
  