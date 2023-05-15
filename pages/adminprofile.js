import MyDashboard from "./component/dashboard"
import MyHeader from "./component/header"
import Link from "next/link"
import MyLayout from "./component/layout"
import Footer from "./component/footer"


export default function AdminProfile() {
  
  
  return (
    <>
    <MyHeader />

    <MyLayout/>
    <MyDashboard title="Admin Dashboard"/><br/>
    <h3 align="center">Welcome Admin</h3>
    <br/><br/><br/>
    <Footer/>
    
      </>
    
  )
}
