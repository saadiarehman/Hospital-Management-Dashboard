import { CreditCard, DollarSign, Wallet } from "lucide-react"

function BillingCards(){
    return(
        <>
         <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-4 ml-3 mr-3">
                    <div className="bg-blue-100 border border-blue-200 flex-col p-5 rounded items-center">
                        <div className="flex justify-center  gap-1 ">
                            <Wallet size={40} color="white" className="bg-blue-200 p-1 rounded" />
                            <p className="text-2xl font-bold">Total Invoices</p>
                        </div>
                        
                        <div className="flex justify-center text-blue-700 font-bold mt-5">
                            <DollarSign  size={40} color="#1D4ED8" />
                            <p className="text-3xl">12,500</p>
                        </div>
                    </div>
                    <div className="bg-green-100 border border-green-200 flex-col p-5 rounded items-center">
                        <div  className="flex justify-center  gap-1">
                            <CreditCard size={40} color="white"  className="bg-green-200 p-1 rounded" />
                            <p className="text-2xl font-bold">Paid</p>
                        </div>
                      
                        <div className="flex justify-center text-green-700 font-bold mt-5">
                            <DollarSign  size={40} color="green" />
                            <p className="text-3xl">9300</p>
                        </div>
                    
                    </div>
                    <div className="bg-red-100 border border-red-200 flex-col p-5 rounded items-center">
                        <div  className="flex justify-center gap-1">
                            <DollarSign size={40} color="white"  className="bg-red-200 p-1 rounded" />  
                            <p className="text-2xl font-bold">Pending</p>
                        </div>
                      
                        <div className="flex justify-center text-red-700 font-bold mt-5">
                            <DollarSign  size={40} color="" />
                            <p className="text-3xl">3,300</p>
                        </div>
                     
                    </div>
                   
                    
            </div>
        </>
    )
}

export default BillingCards