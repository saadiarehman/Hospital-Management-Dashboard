import { Plus, UsersRound } from "lucide-react"
import DoctorStats from "../componenets/doctors/DoctorStats"
import DoctorSearch from "../componenets/doctors/DoctorSearch"
import DoctorTable from "../componenets/doctors/DoctorTable"

function Doctors(){
    return(
        <>
         <div className="flex justify-between p-5">
            <div className="flex items-center gap-4">
                <UsersRound size={40} color="#1E40AF" />
                <div>
                    <h1 className="text-3xl font-bold text-blue-800">Doctor Directory </h1>
                    <span className="text-blue-300 font-bold">Manage & view all Hospital Doctors</span>
                </div>
                
            </div>
            <div>
                <button className="flex gap-2 p-3 items-center shadow-xl bg-blue-300 rounded-xl">
                    <Plus size={20} color="#1E40AF" />
                    Add Doctor
                </button>
            </div>
           
        </div>
         <DoctorStats />
         <DoctorSearch />
         <DoctorTable />
        </>
       
    )
}

export default Doctors