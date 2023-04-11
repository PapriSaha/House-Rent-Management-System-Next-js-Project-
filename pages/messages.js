import MyDashboard from "./component/dashboard"
import MyHeader from "./component/header"
import Link from "next/link"

export default function Messages() {
  
  
  return (
    <>
    <MyHeader />
    
    <MyDashboard title="Messages"/>

    <br/>
    
    <h2>Messages</h2><br/>

    <h3>Inbox</h3>
    
    
   <p><input type="checkbox"></input>Regarding Payment</p><br/>
    
    
    
      </>
    
  )
}
