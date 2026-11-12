import {
  Stethoscope,
  Baby,
  Heart,
  Bone,
  Venus,
  Grid2X2,

} from "lucide-react";

function DepartmentCards(){
    return(
        <>
            <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 w-full gap-4">
                    <div className="bg-blue-100 border border-blue-200 p-5 rounded-xl flex flex-col items-center">
                        <div className="p-2"><Stethoscope size={60} color="#3B82F6" /></div>
                        <h1 className="text-2xl font-bold p-2">General Medicine</h1>
                        <p className="text-xl p-2">120 Patients</p>
                        
                    </div>
                    <div className="bg-green-100 border border-green-200 flex flex-col items-center p-5 rounded-xl">
                        <div className="p-2"><Baby size={60} color="#10B981" /></div>
                        <div className="text-2xl font-bold  p-2">Pediatrics</div>
                        <div className="text-xl  p-2">85 Patients</div>
                        
                    </div>
                    <div className="bg-purple-100 border border-purple-200 flex flex-col items-center p-5 rounded-xl">
                        <div className="p-2"><Heart size={60} color="#F87171" /></div>
                       <div className="text-2xl font-bold  p-2">Cardiology</div>
                        <div className="text-xl  p-2">60 Patients</div>
                        
                    </div>
                    <div className="bg-red-100 border border-red-200 flex flex-col items-center p-5 rounded-xl">
                        <div className="p-2"><Bone size={60} color="#A78BFA" /></div>
                       <div className="text-2xl font-bold  p-2">Orthopedics</div>
                        <div className="text-xl  p-2">60 Patients</div>
                       
                    </div>
                     <div className="bg-purple-100 border border-purple-200 flex flex-col items-center p-5 rounded-xl">
                        <div className="p-2"><Venus size={60} color="#06B6D4" /></div>
                        <div className="text-2xl font-bold  p-2">Gynecology</div>
                        <div className="text-xl  p-2">45 Patients</div>
                    </div>
                    <div className="bg-red-100 border border-red-200 flex flex-col items-center p-5 rounded-xl">
                        <div className="p-2" ><Grid2X2 size={60} color="#FDBA74" /></div>
                        <div className="text-2xl font-bold  p-2">Others</div>
                        <div className="text-xl  p-2">30 Patients</div>
                        
                    </div>
                </div>
        </>
    )
}

export default DepartmentCards