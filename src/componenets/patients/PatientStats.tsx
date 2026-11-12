
import {
  UsersRound,
  UserCheck,
  UserX,
  Clock,
} from "lucide-react";

import type { Patient } from "../../pages/Patients";

interface PatientStatsProps {
  patients: Patient[];
  selectedStatus: string;
  onStatusChange: (status: string) => void;
}

function PatientStats({
  patients,
  selectedStatus,
  onStatusChange,
}: PatientStatsProps) {

  // Calculate real-time patient statistics
  const totalPatients = patients.length;

  const admittedPatients = patients.filter(
    (patient) => patient.status === "Admitted"
  ).length;

  const dischargedPatients = patients.filter(
    (patient) => patient.status === "Discharged"
  ).length;

  const pendingPatients = patients.filter(
    (patient) => patient.status === "Pending"
  ).length;

  const stats = [
    {
      title: "Total Patients",
      count: totalPatients,
      status: "All",
      icon: UsersRound,
      color: "text-blue-800",
      bg: "bg-blue-100",
      border: "border-blue-200",
    },
    {
      title: "Admitted Patients",
      count: admittedPatients,
      status: "Admitted",
      icon: UserCheck,
      color: "text-green-700",
      bg: "bg-green-100",
      border: "border-green-200",
    },
    {
      title: "Discharged Patients",
      count: dischargedPatients,
      status: "Discharged",
      icon: UserX,
      color: "text-purple-700",
      bg: "bg-purple-100",
      border: "border-purple-200",
    },
    {
      title: "Pending Patients",
      count: pendingPatients,
      status: "Pending",
      icon: Clock,
      color: "text-yellow-700",
      bg: "bg-yellow-100",
      border: "border-yellow-200",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-5">

      {stats.map((item) => {
        const Icon = item.icon;
        const isActive = selectedStatus === item.status;

        return (
          <button
            key={item.status}
            type="button"
            onClick={() => onStatusChange(item.status)}
            className={`flex items-center justify-between p-5 rounded-xl border shadow-sm transition hover:shadow-md text-left ${
              item.bg
            } ${item.border} ${
              isActive ? "ring-2 ring-blue-500" : ""
            }`}
          >
            <div>
              <p className={`font-medium ${item.color}`}>
                {item.title}
              </p>

              <h2 className={`text-3xl font-bold mt-2 ${item.color}`}>
                {item.count}
              </h2>
            </div>

            <Icon size={35} className={item.color} />
          </button>
        );
      })}

    </div>
  );
}

export default PatientStats;
