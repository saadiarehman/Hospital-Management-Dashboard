import { Hospital } from "lucide-react"
function HospitalLogo(){
    return(
        <div className="flex items-center justify-center p-5 gap-2">
            <Hospital size={50} className="text-blue-600" />
            <h1 className="text-3xl font-bold text-white">Hospital Care</h1>
        </div>
    )
}
export default HospitalLogo