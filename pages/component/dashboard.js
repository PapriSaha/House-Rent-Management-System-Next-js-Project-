import Header from "./header"
import Link from "next/link"
import Image from 'next/image'

export default function MyDashboard(props)   
{
    return(
        <>
        <Header title={props.title} />
        <br/>
       
        <Image src="/home.png" alt="me" width="94" height="54" />
        <h1>House Rent Management System</h1>
        
        <h3 align="right"><Link href="/signup">SIGNUP </Link><br/><Link href="/signin">SIGN IN</Link></h3>
        
        
        <nav>
        <h3><Link href="/adminprofile">Dashboard</Link></h3>
        <Link href="/"> Home</Link>
        <br/>
        <Link href="/changepersonalinfo">Change Personal Information</Link>
        <br/>
        <Link href="/changepassword"> Change Password</Link>
        <br/>
        <Link href="/addtenant">Add Tenant</Link>
        <br/>
        <Link href="/addmanager">Add Manager</Link>
        <br/>
        <Link href="/addhouseowner">Add House Owner</Link>
        <br/>
        <Link href="/addhouse">Add House</Link>
        <br/>
        <Link href="/contractform">Contract Form</Link>
        <br/>
        <Link href="/paymentinfo">Payment Information</Link>
        <br/>
        <Link href="/paymentform">Payment Form</Link>
        <br/>
        <Link href="/sendmessage">Send Message</Link>
        <br/>
        <Link href="/messages">Messages</Link>
        <br/>
        <Link href="/">Sign Out</Link>
        <br/>

        
        </nav>
        <main>

        </main>
        
        </>
    )
}