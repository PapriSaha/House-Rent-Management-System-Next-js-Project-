import Header from "./header"
import Link from "next/link"
import Image from 'next/image'
import MyLayout from "@/pages/component/layout"

export default function MyDashboard(props)   
{
    return(
        
        <>
        <Header title={props.title} />
        
        <aside class="fixed top-0 left-0 z-40 w-64 h-screen pt-32 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
        <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 min-h-screen flex flex-col justify-center items-center" style={{ background: 'linear-gradient(204deg, rgba(153,255,204,1) 0%, rgba(153,255,204,1) 100%)' }}>
        <h3 align="left"><Link href="/adminprofile">Dashboard</Link></h3>
        <br/>
   <span class="flex-1 ml-3 whitespace-nowrap">Admins Information</span>
           
           <br/>
       <ul class="space-y-2 font-medium">
        
         <li>
            <Link href="/admin/dashboard/addadmin" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">

               <span class="flex-1 ml-3 whitespace-nowrap">Add Admin</span>
           </Link>
         </li>
         
         <li>
            <Link href="/admin/dashboard/deleteadmin" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               
                       <span class="flex-1 ml-3 whitespace-nowrap">Delete Admins</span>
            </Link>
         </li>
         <li>
            <Link href="/admin/dashboard/updateadmin" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               
                       <span class="flex-1 ml-3 whitespace-nowrap">Update Profile Information</span>
            </Link>
         </li>
         </ul>  
               <span class="flex-1 ml-3 whitespace-nowrap">Tenants Information</span>
           
         <br/>
         <ul>
         <li>
            <Link href="/admin/dashboard/gettenants" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               
                       <span class="flex-1 ml-3 whitespace-nowrap">All Tenant Information</span>
            </Link>
         </li>
         <li>
            <Link href="/admin/dashboard/findtenant" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               
                       <span class="flex-1 ml-3 whitespace-nowrap">Find Tenant Information</span>
            </Link>
         </li>
         <li>
            <Link href="/admin/dashboard/findtenantbyuname" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               
                       <span class="flex-1 ml-3 whitespace-nowrap">Find Tenant Information by Searching Name</span>
            </Link>
         </li>
         <li>
            <Link href="/admin/dashboard/addtenant" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               
                       <span class="flex-1 ml-3 whitespace-nowrap">Add New Tenant</span>
            </Link>
         </li>
     </ul>
     
     <span class="flex-1 ml-3 whitespace-nowrap">Managers Information</span>
           
         <br/>
         <ul>

         <li>
            <Link href="/admin/dashboard/findmanager" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               
                       <span class="flex-1 ml-3 whitespace-nowrap">Find Manager Information</span>
            </Link>
         </li>
         <li>
            <Link href="/admin/dashboard/addmanager" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               
                       <span class="flex-1 ml-3 whitespace-nowrap">Add Manager</span>
            </Link>
         </li>
         <li>
            <Link href="/admin/dashboard/deletemanager" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               
                       <span class="flex-1 ml-3 whitespace-nowrap">Delete Manager</span>
            </Link>
         </li>

         </ul>
      
   </div>
</aside>
    
      
        
        </>
    )
}
