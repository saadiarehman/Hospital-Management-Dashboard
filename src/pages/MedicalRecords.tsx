import { UsersRound } from "lucide-react"
import MedicalRecordsSearch from "../componenets/medicalrecords/MedicalRecordsSearch"
import MedicalRecordsTable from "../componenets/medicalrecords/MedicalRecordsTable"

function MedicalRecords(){
     return(
        <>
         <div className="flex justify-between p-5">
            <div className="flex items-center gap-4">
                <UsersRound size={40} color="#1E40AF" />
                <div>
                    <h1 className="text-3xl font-bold text-blue-800">Medical Records Management </h1>
                    <span className="text-blue-300 font-bold">Access & View Patient Medical Records</span>
                </div>
                
            </div>
            <div>
                <button className="flex gap-2 p-3 items-center shadow-xl bg-blue-500 text-white rounded-xl">
                    
                    View All
                </button>
            </div>
           
        </div>
         <MedicalRecordsSearch />
         <MedicalRecordsTable />
        </>
       
    )
}

export default MedicalRecords