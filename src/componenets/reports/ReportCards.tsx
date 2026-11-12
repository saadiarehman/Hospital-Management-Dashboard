import { CalendarDays, DollarSign, Users } from "lucide-react"

function ReportCards(){
    return(
        <div className="p-3">
         <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-4 justify-center">
                    <div className="bg-blue-100 border border-blue-200 flex flex-col items-center p-5 rounded">
                        <Users size={60} color="#1E40AF" />
                        <p className="text-2xl font-bold text-blue-900 p-1">Patient Report</p>
                        <span className="text-xl font-bold text-blue-900">Report</span>
                    </div>
                    <div className="bg-green-100 border border-green-200 flex flex-col items-center p-5 rounded ">
                        <CalendarDays size={60} color="green"   />
                        <p className="text-2xl font-bold text-blue-900">Appointment</p>
                          <span className="text-xl font-bold text-blue-900">Report</span>
                    </div>
                   <div className="bg-purple-100 border border-purple-200 flex flex-col items-center p-5 rounded">
                        <DollarSign  size={60} color="#9333EA" />
                        <p className="text-3xl text-blue-900 font-bold">Department</p>
                          <span className="text-xl font-bold text-blue-900">Report</span>                       
                   </div>
                    
            </div>
        </div>
    )
}

export default ReportCards