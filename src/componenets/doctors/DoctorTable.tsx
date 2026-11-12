import { Pencil, Trash2 } from "lucide-react";

function DoctorTable(){
   const doctors = [
  {
    id: "D-001",
    name: "Dr. Ahmed Raza",
    specialization: "General Physician",
    department: "Medicine",
    status: "Active",
  },
  {
    id: "D-002",
    name: "Dr. Sara Malik",
    specialization: "Cardiologist",
    department: "Cardiology",
    status: "Active",
  },
  {
    id: "D-003",
    name: "Dr. Usman Tariq",
    specialization: "Pediatrician",
    department: "Pediatrics",
    status: "Active",
  },
  {
    id: "D-004",
    name: "Dr. Farah Khan",
    specialization: "Gynecologist",
    department: "Gynecology",
    status: "On Leave",
  },
  {
    id: "D-005",
    name: "Dr. Bilal Ahmed",
    specialization: "Orthopedic",
    department: "Orthopedics",
    status: "Active",
  },
];
    return(
        <div className="p-5">
            <div className="w-full overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full min-w-200 text-left">
                <thead className="bg-blue-50 text-blue-900">
                    <tr>
                        <th className="p-4">ID</th>
                        <th className="p-4">Name</th>
                        <th className="p-4">specialization</th>
                        <th className="p-4">department</th>
                        <th className="p-4">Status</th>
                        <th className="p-4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {doctors.map((doctor)=>(
                        <tr key={doctor.id} className="border-t border-gray-200">
                            <td className="p-4">{doctor.id}</td>
                            <td className="p-4 font-medium">{doctor.name}</td>
                            <td className="p-4">{doctor.specialization}</td>
                            <td className="p-4">{doctor.department}</td>
                            <td className="p-4">
                                <span
                                    className={`rounded-full px-3 py-1 text-sm font-medium ${
                                                doctor.status === "Active"
                                                ? "bg-green-100 text-green-700"
                                                : doctor.status === "On Leave"
                                                ? "bg-purple-100 text-orange-700"
                                                : "bg-blue-100 text-blue-700"
                                    }`}
                                >
                                    {doctor.status}
                                </span>
                            </td>
                            <td className="p-4">
                                <div className="flex items-center gap-3">
                                <button className="text-blue-600 hover:text-blue-800">
                                    <Pencil size={19} />
                                </button>

                                <button className="text-red-500 hover:text-red-700">
                                    <Trash2 size={19} />
                                </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-between items-center p-4 bg-white">
                <p className="text-sm text-gray-500">
                    Showing 1-5 of 18 Doctors
                 </p>

            <div className="flex gap-2">
                <button className="bg-blue-100 text-blue-800 px-3 py-1 rounded">1</button>
                <button className="border border-blue-100  px-3 py-1 rounded">2</button>
                <button className="border border-blue-100  px-3 py-1 rounded">3</button>
                <button className="border border-blue-100  px-3 py-1 rounded">›</button>
            </div>
        </div>
        </div>

        </div>
        
    )
}

export default DoctorTable