

import MyLayout from "./component/layout"
import MyHeader from "./component/header"
import Footer from "./component/footer"
import Link from "next/link"

export default function Home() {
  const names = ['Gulshan', 'Bashundhara', 'Banani', 'Dhanmandi', 'Mirpur', 'Uttara', 'Baridhara'];
  
  return (
    <>
      <MyHeader />
      <MyLayout title="Home"/>
      
      
      <div className="p-24 flex justify-center items-center" align="center" style={{ background: 'linear-gradient(204deg, rgba(204,255,229,1) 0%, rgba(204,255,229,1) 100%)' }}>
      <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900" align="center"><Link href="/findhouse">Search Houses</Link></a>
    </nav>
        <h3 className="text-xl font-bold">Explore Areas</h3>
        <h4 className="list-disc pl-6 mt-4">
          {names.map((name) => (
            <p key={name} className="mt-2">{name}</p>
          ))}
        </h4>
      </div>

       
      <Footer/>
    </>
  )
}

