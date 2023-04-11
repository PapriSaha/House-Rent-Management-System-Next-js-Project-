import MyDashboard from "./component/dashboard"
import MyHeader from "./component/header"
import Link from "next/link"

export default function AdminProfile() {
  
  
  return (
    <>
    <MyHeader />
    
    <MyDashboard title="Admin Dashboard"/><br/>
    <h3 align="right"><Link href="/admin/dashboard/getadmins">See All Admins</Link></h3><br/>
    <h3 align="right"><Link href="/admin/dashboard/findtenant">Find Tenants by ID</Link></h3><br/>
    <h3 align="right"><Link href="/admin/dashboard/findtenantbyuname">Find Tenants by User Name</Link></h3><br/>
    <h3 align="right"><Link href="/admin/dashboard/gettenants">See All Tenants</Link></h3><br/>
    <h3 align="right"><Link href="/admin/dashboard/findmanager">Find Managers by ID</Link></h3><br/>
    <h3 align="center">Welcome Admin</h3>
    
    
    
      </>
    
  )
}
