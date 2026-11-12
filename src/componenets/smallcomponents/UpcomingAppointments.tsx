import { CalendarDays } from "lucide-react";

function UpcomingAppointments(){
     const appointments = [
    {
      id: 1,
      patient: "Ahmed Ali",
      doctor: "Dr. Sarah",
      department: "Cardiology",
      time: "09:00 AM",
      status: "Confirmed",
    },
    {
      id: 2,
      patient: "Fatima Noor",
      doctor: "Dr. James",
      department: "Neurology",
      time: "10:30 AM",
      status: "Pending",
    },
    {
      id: 3,
      patient: "Omar Hassan",
      doctor: "Dr. Emily",
      department: "Pediatrics",
      time: "11:00 AM",
      status: "Confirmed",
    },
    {
      id: 4,
      patient: "Ayesha Khan",
      doctor: "Dr. David",
      department: "Orthopedics",
      time: "12:30 PM",
      status: "Pending",
    },
  ];
    return(
        <div className="border border-gray-200 rounded shadow-xl p-2">
            <div className="flex items-center p-5 gap-3">
                  <CalendarDays size={22} color="#1E40AF" />
                  <h2 className="text-xl font-bold">Upcoming Appointments</h2>
            </div>
            <div className="flex flex-col gap-2">
                {appointments.map((appointment)=>(
                    <div 
                        key={appointment.id}
                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-200 pb-3"
                    >
                    <div>
                        <h3 className="font-semibold">
                            {appointment.patient}
                        </h3>
                        <p className="text-sm text-gray-300">
                            {appointment.doctor}  • {appointment.department}
                        </p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <span className="text-sm font-medium">
                            {appointment.time}
                        </span>
                        <span className={`text-sm px-3 py-1 rounded-full ${
                            appointment.status === "Confirmed"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}>
                            {appointment.status}
                        </span>
                    </div>
                   
                   
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UpcomingAppointments