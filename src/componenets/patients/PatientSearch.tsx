
import { Search } from "lucide-react";

interface PatientSearchProps {
  search: string;
  setSearch: (value: string) => void;
  gender: string;
  setGender: (value: string) => void;
  status: string;
  setStatus: (value: string) => void;
}

function PatientSearch({
  search,
  setSearch,
  gender,
  setGender,
  status,
  setStatus,
}: PatientSearchProps) {
  return (
    <div className="flex flex-col md:flex-row items-center w-full p-5 gap-4">

      <div className="relative w-full md:w-1/3">
        <Search
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-800"
        />

        <input
          type="text"
          placeholder="Search Patients..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-blue-100 pl-12 pr-4 py-3 rounded-xl shadow w-full"
        />
      </div>

      <div className="flex flex-wrap gap-3 w-full md:w-auto">
        <select
          className="border border-blue-100 p-3 rounded-xl shadow"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="All">All Genders</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <select
          className="border border-blue-100 p-3 rounded-xl shadow"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="All">All Status</option>
          <option value="Admitted">Admitted</option>
          <option value="Discharged">Discharged</option>
          <option value="Pending">Pending</option>
        </select>
      </div>

    </div>
  );
}

export default PatientSearch;
