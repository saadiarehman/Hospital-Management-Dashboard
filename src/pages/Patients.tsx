
import { useState } from "react";
import { Plus, UsersRound } from "lucide-react";

import PatientStats from "../componenets/patients/PatientStats";
import PatientSearch from "../componenets/patients/PatientSearch";
import PatientTable from "../componenets/patients/PatientTable";
import PatientForm from "../componenets/patients/PatientForm";

export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  phone: string;
  status: string;
}

function Patients() {
  const [showForm, setShowForm] = useState(false);

  const [patients, setPatients] = useState<Patient[]>([
    {
      id: "P-001",
      name: "Ayesha Khan",
      age: 28,
      gender: "Female",
      phone: "+966501234567",
      status: "Admitted",
    },
    {
      id: "P-002",
      name: "Usman Ahmed",
      age: 45,
      gender: "Male",
      phone: "+966512345678",
      status: "Admitted",
    },
    {
      id: "P-003",
      name: "Fatima Noor",
      age: 32,
      gender: "Female",
      phone: "+966523456789",
      status: "Discharged",
    },
    {
      id: "P-004",
      name: "Hamza Ali",
      age: 12,
      gender: "Male",
      phone: "+966534567890",
      status: "Admitted",
    },
    {
      id: "P-005",
      name: "Sana Khan",
      age: 60,
      gender: "Female",
      phone: "+966545678901",
      status: "Pending",
    },
  ]);

  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("All");
  const [status, setStatus] = useState("All");

  const addPatient = (newPatient: Omit<Patient, "id">) => {
    const patient: Patient = {
      ...newPatient,
      id: `P-${String(patients.length + 1).padStart(3, "0")}`,
    };

    setPatients((prev) => [...prev, patient]);
    setShowForm(false);
  };

  return (
    <>
      <div className="flex justify-between items-center p-5">
        <div className="flex items-center gap-4">
          <UsersRound size={40} color="#1E40AF" />

          <div>
            <h1 className="text-3xl font-bold text-blue-800">
              Patient Management
            </h1>

            <span className="text-blue-300 font-bold">
              Manage & view all Hospital Patients
            </span>
          </div>
        </div>

        <button
          onClick={() => setShowForm(true)}
          className="flex gap-2 p-3 items-center shadow-xl bg-blue-300 rounded-xl"
        >
          <Plus size={20} color="#1E40AF" />
          Add Patient
        </button>
      </div>

      <PatientStats
        patients={patients}
        selectedStatus={status}
        onStatusChange={setStatus}
        />

      <PatientSearch
        search={search}
        setSearch={setSearch}
        gender={gender}
        setGender={setGender}
        status={status}
        setStatus={setStatus}
      />

      <PatientTable
        patients={patients}
        search={search}
        gender={gender}
        status={status}
      />

      {showForm && (
        <PatientForm
          onSave={addPatient}
          onClose={() => setShowForm(false)}
        />
      )}
    </>
  );
}

export default Patients;
