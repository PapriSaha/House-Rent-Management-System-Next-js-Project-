import Header from "./header";
import Link from "next/link";
import Image from 'next/image';

export default function MyLayout(props) {
  return (
    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 min-h-screen flex flex-col justify-center items-center" style={{ background: 'linear-gradient(204deg, rgba(153,255,204,1) 0%, rgba(153,255,204,1) 100%)' }}>
      <Header title={props.title} />
      <br/>
      <nav class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

      <Image src="/home.png" alt="me" width="94" height="54" />
      <h1 className="text-2xl font-bold text-white">House Rent Management System</h1>
     </nav>
     <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-right">
     
     <h3 align= "right"><a class="mr-5 hover:text-gray-900"><Link href="/signup">SIGN UP</Link><br /></a> </h3>
       
     <h3 align="right"><a class="mr-5 hover:text-gray-900"><Link href="/signin">SIGN IN</Link></a></h3>
      
      </nav>
      <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900"><Link href="/">Home</Link></a>
      <br/>
      <a class="mr-5 hover:text-gray-900"><Link href="/about">About US</Link></a>
      <a class="mr-5 hover:text-gray-900"><Link href="/contact">Contact US</Link></a>
    </nav>

      <main className="flex-grow">{/* Your main content goes here */}</main>
    </div>
  );
}