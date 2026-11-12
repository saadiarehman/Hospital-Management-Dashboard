import { Search } from "lucide-react"

function DoctorSearch(){
    return(
        <div className="flex items-center w-full p-5 gap-5">
            <div className="relative w-1/3">
                <Search size={24} className="absolute mt-5 ml-5" />
                <input type="text" placeholder="Search Doctors..." className="border border-blue-100 p-3 text-center text-xl rounded-xl shadow w-full" />
            </div>
            
            <div>
                <select className="border  border-blue-100 p-3 text-center text-xl rounded-xl shadow">
                    <option value="All">All Departments</option>
                    <option value="Medicine">Medicine</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Pediatrics">Pediatrics</option>
                    <option value="Gynecology">Gynecology</option>
                    <option value="Orthopedics">Orthopedics</option>
                </select>
                
                
            </div>
            

        </div>
    )
}

export default DoctorSearch