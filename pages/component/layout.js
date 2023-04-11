import Header from "./header"
import Link from "next/link"
import Image from 'next/image'

export default function MyLayout(props)   
{
    return(
        <>
        <Header title={props.title} />
        <br/>
       
        <Image src="/home.png" alt="me" width="94" height="54" />
        <h1>House Rent Management System</h1>
        
        <h3 align="right"><Link href="/signup">SIGNUP </Link><br/><Link href="/signin">SIGN IN</Link></h3>
        
        
        <nav>
        <Link href="/"> Home</Link>
        <br/>
        <Link href="/about"> About US</Link>
        <br/>
        <Link href="/contact"> Contact US</Link>
        <br/>

        
        </nav>
        <main>

        </main>
        <div style={{ position: "absolute", bottom: 0, width:"100%" }}>
            House Rent Management System @copyright 2023</div>
        </>
    )
}