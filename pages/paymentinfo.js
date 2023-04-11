import MyDashboard from "./component/dashboard"
import MyHeader from "./component/header"
import Link from "next/link"

export default function PaymentInfo() {
  
  
  return (
    
    <>
    <MyHeader />
    
    <MyDashboard title="Payment Information"/>
    
   <br/>

    <h2>Payment Information</h2><br/>
    
    <form align="center">
    

    <table>
  <tr>
    <th>Payment Reference No</th>
    <th>Amount</th>
    <th>Payment For</th>
  </tr>
  <br/>
  <tr>
    <td>12341619</td>
    <td>12000</td>
    <td>Jan19-Jan20</td>
  </tr>
  <br/>
  <tr>
    <td>12314617</td>
    <td>28000</td>
    <td>Feb20-Feb21</td>
  </tr>
</table>

   
   
    </form>
    
    
    
      </>
    
  )
}
