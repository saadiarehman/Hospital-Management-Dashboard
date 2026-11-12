import { ChartNoAxesColumn, ChevronDown } from "lucide-react"
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

function PatientAdmissions(){
    const data=[
         { day: "Oct 10", patients: 30 },
    { day: "Oct 11", patients: 32 },
    { day: "Oct 12", patients: 25 },
    { day: "Oct 13", patients: 28 },
    { day: "Oct 14", patients: 36 },
    { day: "Oct 15", patients: 43 },
    { day: "Oct 16", patients: 60 },
    ]
    return(
        <div className="border border-gray-200 rounded-xl shadow-xl p-5">
       
            <div className="flex items-center gap-5 justify-between mt-5 mb-5">
                <div className="flex gap-1 items-center">
                    <ChartNoAxesColumn size={22} color="#1E40AF" />
                    <h2 className="font-bold text-xl">Patient Admissions</h2>
                </div>
                <div>
                    <button className="flex items-center text-sm border border-gray-200 p-1 shadow-md rounded">
                    <span>Last 7 days </span> 
                    <ChevronDown size={25} color="blue" />
                    </button>
                
                </div>
            
             
            </div>
            <div className="w-full h-72">
                    <ResponsiveContainer width="100%" height="100%">
                       <LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="day" />
                                <YAxis />
                                <Tooltip />
                                <Line
                                    type="monotone"
                                    dataKey="patients"
                                    stroke="blue"
                                    strokeWidth={3}
                                    dot={{ r: 3 }}
                                    activeDot={{ r: 7 }}
                                />
                        </LineChart>
                    </ResponsiveContainer>

            </div>
        </div>
    )
}

export default PatientAdmissions