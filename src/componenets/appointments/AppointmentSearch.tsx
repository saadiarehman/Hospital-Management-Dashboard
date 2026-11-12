import { Search } from "lucide-react"

function AppointmentSearch(){
    return(
        <div className="flex items-center w-full p-5 gap-5">
            <div className="relative w-1/3">
                <Search size={24} className="absolute mt-5 ml-5" />
                <input type="text" placeholder="Search Appointments..." className="border border-blue-100 p-3 text-center text-xl rounded-xl shadow w-full" />
            </div>
            
            <div>
                <select className="border  border-blue-100 p-3 text-center text-xl rounded-xl shadow">
                     <option value="">All Dates</option>
                    <option value="Today">Today</option>
                    <option value="Tomorrow">Tomorrow</option>
                    <option value="This Week">This Week</option>
                    <option value="This Month">This Month</option>
                </select>
                
                
            </div>
            

        </div>
    )
}

export default AppointmentSearch