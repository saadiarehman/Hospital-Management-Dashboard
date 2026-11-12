import { Pencil, Trash2 } from "lucide-react";

function MedicalRecordsTable(){
  const medicalrecords = [
  {
    id: "A-001",
    patient: "Ahmed Ali",
    doctor: "Dr. Ahmed Raza",
    department: "Medicine",
    date: "05 Nov 2026",
    time: "09:00 AM",
    status: "Confirmed",
  },
  {
    id: "A-002",
    patient: "Fatima Noor",
    doctor: "Dr. Sara Malik",
    department: "Cardiology",
    date: "05 Nov 2026",
    time: "10:30 AM",
    status: "Pending",
  },
  {
    id: "A-003",
    patient: "Omar Hassan",
    doctor: "Dr. Usman Tariq",
    department: "Pediatrics",
    date: "05 Nov 2026",
    time: "11:00 AM",
    status: "Completed",
  },
  {
    id: "A-004",
    patient: "Ayesha Khan",
    doctor: "Dr. Farah Khan",
    department: "Gynecology",
    date: "06 Nov 2026",
    time: "12:30 PM",
    status: "Cancelled",
  },
  {
    id: "A-005",
    patient: "Bilal Ahmed",
    doctor: "Dr. Bilal Ahmed",
    department: "Orthopedics",
    date: "06 Nov 2026",
    time: "02:00 PM",
    status: "Confirmed",
  },
];
    return(
        <div className="p-5">
            <div className="w-full overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full min-w-200 text-left">
                <thead className="bg-blue-50 text-blue-900">
                    <tr>
                        <th className="p-4">ID</th>
                        <th className="p-4">Patient</th>
                        <th className="p-4">Doctor</th>
                        <th className="p-4">department</th>
                        <th className="p-4">Date</th>
                        <th className="p-4">Time</th>
                        <th className="p-4">Status</th>
                        <th className="p-4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {medicalrecords.map((medicalrecord)=>(
                        <tr key={medicalrecord.id} className="border-t border-gray-200">
                            <td className="p-4">{medicalrecord.id}</td>
                            <td className="p-4">{medicalrecord.patient}</td>
                            <td className="p-4">{medicalrecord.doctor}</td>
                            <td className="p-4">{medicalrecord.department}</td>
                            <td className="p-4">{medicalrecord.date}</td>
                            <td className="p-4">{medicalrecord.time}</td>
                            <td className="p-4">
                                <span
                                    className={`rounded-full px-3 py-1 text-sm font-medium ${
                                                medicalrecord.status === "Confirmed"
                                                ? "bg-green-100 text-green-700"
                                                : medicalrecord.status === "Pending"
                                                ? "bg-yellow-100 text-yellow-700"
                                                : medicalrecord.status === "Completed"
                                                ? "bg-blue-100 text-blue-700"
                                                : "bg-red-100 text-red-700"
                                    }`}
                                >
                                    {medicalrecord.status}
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
                    Showing 1-5 of 32 MedicalRecords
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

export default MedicalRecordsTable