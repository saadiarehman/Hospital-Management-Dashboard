import { UsersRound } from "lucide-react"
import BillingCards from "../componenets/billing/BillingCards"
import BillingTable from "../componenets/billing/BillingTable"

function Billings(){
       return(
        <>
            <div className="flex justify-between p-5">
                <div className="flex items-center gap-4">
                    <UsersRound size={40} color="#1E40AF" />
                    <div>
                        <h1 className="text-3xl font-bold text-blue-800">Appointment Management </h1>
                        <span className="text-blue-300 font-bold">Manage Invoices & Payments</span>
                    </div>
                
                </div>
                
            
            </div>
            <BillingCards />
            <BillingTable />
           
        </>
       
    )

}

export default Billings