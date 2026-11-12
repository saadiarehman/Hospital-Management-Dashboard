import {  
    UsersRound,
    Stethoscope,
    CalendarDays,
    Bed,
    ArrowUp
    } from "lucide-react"
import PatientAdmissions from "../componenets/charts/PatientAdmissions"
import DepartmentDistribution from "../componenets/charts/DepartmentDistribution"
import UpcomingAppointments from "../componenets/smallcomponents/UpcomingAppointments"
import RecentActivities from "../componenets/smallcomponents/RecentActivities"

function Dashboard(){
    return(
        <div className="p-5" >
            <div>
                <div className=" text-4xl text-black font-bold">Dashboard</div>
                <div className="text-xl text-blue-300">Welcome Back, Admin!</div>
                <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 w-full gap-4">
                    <div className="bg-blue-100 border border-blue-200 flex-col p-5 rounded ">
                        <div><UsersRound size={50} color="blue" /></div>
                        <div className="text-xl">Total Patients</div>
                        <div className="text-5xl font-bold">350</div>
                        <div className="flex items-center text-green-700 font-bold"><ArrowUp size={16} color="green" />12 %</div>
                        <div className="text-blue-300">vs. last month</div>
                    </div>
                    <div className="bg-green-100 border border-green-200 flex-col p-5 rounded">
                        <div><Stethoscope size={50} color="green" /></div>
                        <div className="text-xl">Total Doctors</div>
                        <div className="text-5xl font-bold">25</div>
                        <div className="flex items-center text-green-700 font-bold"><ArrowUp size={16} color="green" />8 %</div>
                        <div className="text-blue-300">vs. last month</div>
                    </div>
                    <div className="bg-purple-100 border border-purple-200 flex-col p-5 rounded">
                        <div><CalendarDays size={50} color="purple" /></div>
                        <div className="text-xl">Appointments Today</div>
                        <div className="text-5xl font-bold">18</div>
                        <div className="flex items-center text-green-700 font-bold"><ArrowUp size={16} color="green" />5 %</div>
                        <div className="text-blue-300">vs. last month</div>
                    </div>
                    <div className="bg-red-100 border border-red-200 flex-col p-5 rounded">
                        <div><Bed size={50} color="red" /></div>
                        <div className="text-xl">Available Beds</div>
                        <div className="text-5xl font-bold">42</div>
                        <div className="flex items-center text-green-700 font-bold"><ArrowUp size={16} color="green" />10 %</div>
                        <div className="text-blue-300">vs. last month</div>
                    </div>
                    
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mt-5 items-start">

                <div className="min-w-0">
                    <PatientAdmissions />
                </div>

                <div className="min-w-0">
                    <DepartmentDistribution />
                </div>

                <div className="flex flex-col gap-5 min-w-0">
                    <UpcomingAppointments />
                    <RecentActivities />
                </div>

</div>
            </div>
        </div>
    )
}

export default Dashboard