
import { Pencil, Trash2 } from "lucide-react";
import type { Patient } from "../../pages/Patients";

interface PatientTableProps {
  patients: Patient[];
  search: string;
  gender: string;
  status: string;
}

function PatientTable({
  patients,
  search,
  gender,
  status,
}: PatientTableProps) {

  const filteredPatients = patients.filter((patient) => {
    const matchesSearch =
      patient.name.toLowerCase().includes(search.toLowerCase()) ||
      patient.id.toLowerCase().includes(search.toLowerCase()) ||
      patient.phone.includes(search);

    const matchesGender =
      gender === "All" || patient.gender === gender;

    const matchesStatus =
      status === "All" || patient.status === status;

    return matchesSearch && matchesGender && matchesStatus;
  });

  return (
    <div className="p-5">
      <div className="w-full overflow-x-auto rounded-xl border border-gray-200 shadow-sm">

        <table className="w-full min-w-[800px] text-left">
          <thead className="bg-blue-50 text-blue-900">
            <tr>
              <th className="p-4">ID</th>
              <th className="p-4">Name</th>
              <th className="p-4">Age</th>
              <th className="p-4">Gender</th>
              <th className="p-4">Phone</th>
              <th className="p-4">Status</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredPatients.map((patient) => (
              <tr
                key={patient.id}
                className="border-t border-gray-200"
              >
                <td className="p-4">{patient.id}</td>
                <td className="p-4 font-medium">{patient.name}</td>
                <td className="p-4">{patient.age}</td>
                <td className="p-4">{patient.gender}</td>
                <td className="p-4">{patient.phone}</td>

                <td className="p-4">
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${
                      patient.status === "Admitted"
                        ? "bg-green-100 text-green-700"
                        : patient.status === "Discharged"
                        ? "bg-purple-100 text-purple-700"
                        : patient.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {patient.status}
                  </span>
                </td>

                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      className="text-blue-600 hover:text-blue-800"
                      aria-label={`Edit ${patient.name}`}
                    >
                      <Pencil size={19} />
                    </button>

                    <button
                      type="button"
                      className="text-red-500 hover:text-red-700"
                      aria-label={`Delete ${patient.name}`}
                    >
                      <Trash2 size={19} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {filteredPatients.length === 0 && (
              <tr>
                <td
                  colSpan={7}
                  className="text-center p-5 text-red-500"
                >
                  No patients found.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="flex justify-between items-center p-4 bg-white">
          <p className="text-sm text-gray-500">
            Showing {filteredPatients.length} of {patients.length} patients
          </p>

          <div className="flex gap-2">
            <button className="bg-blue-100 text-blue-800 px-3 py-1 rounded">
              1
            </button>
            <button className="border border-blue-100 px-3 py-1 rounded">
              2
            </button>
            <button className="border border-blue-100 px-3 py-1 rounded">
              3
            </button>
            <button className="border border-blue-100 px-3 py-1 rounded">
              ›
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default PatientTable;
