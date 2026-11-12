import { Plus, UsersRound } from "lucide-react"
import AppointmentSearch from "../componenets/appointments/AppointmentSearch"
import AppointmentStats from "../componenets/appointments/AppointmentStats"
import AppointmentTable from "../componenets/appointments/AppointmentTable"

function Appointments(){
   return(
        <>
         <div className="flex justify-between p-5">
            <div className="flex items-center gap-4">
                <UsersRound size={40} color="#1E40AF" />
                <div>
                    <h1 className="text-3xl font-bold text-blue-800">Appointment Management </h1>
                    <span className="text-blue-300 font-bold">Manage & view all Patient Appointments</span>
                </div>
                
            </div>
            <div>
                <button className="flex gap-2 p-3 items-center shadow-xl bg-blue-300 rounded-xl">
                    <Plus size={20} color="#1E40AF" />
                    Add Appointment
                </button>
            </div>
           
        </div>
         <AppointmentStats />
         <AppointmentSearch />
         <AppointmentTable />
        </>
       
    )
}



export default Appointments