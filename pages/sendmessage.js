import MyDashboard from "./component/dashboard"
import MyHeader from "./component/header"
import Link from "next/link"

export default function SendMessage() {
  
  
  return (
    <>
    <MyHeader />
    
    <MyDashboard title="Send Message"/>
    
    <h2 align="center">Send Message</h2><br/>
    
    <form align="center">
    

  <label for="to">To:</label>
  <input type="text"></input><br/><br/>

  <label for="msg">Message Text:</label>
  <input type="text"></input><br/><br/>

   <Link href= "/adminprofile"><input type="submit" value="Send Message"></input></Link><br/><br/>

   
   
    </form>
    
    
    
      </>
    
  )
}
