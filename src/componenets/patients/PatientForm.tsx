
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type { Patient } from "../../pages/Patients";

interface PatientFormProps {
  onSave: (patient: Omit<Patient, "id">) => void;
  onClose: () => void;
}

function PatientForm({ onSave, onClose }: PatientFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "Male",
    phone: "",
    status: "Admitted",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSave({
      ...formData,
      age: Number(formData.age),
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-xl w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold text-blue-800 mb-5">
          Add New Patient
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Patient Name"
            className="border p-3 rounded-lg w-full"
            required
          />

          <input
            name="age"
            type="number"
            min="0"
            value={formData.age}
            onChange={handleChange}
            placeholder="Age"
            className="border p-3 rounded-lg w-full"
            required
          />

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="border p-3 rounded-lg w-full"
            required
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full md:col-span-2"
          >
            <option value="Admitted">Admitted</option>
            <option value="Discharged">Discharged</option>
            <option value="Pending">Pending</option>
          </select>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            type="button"
            onClick={onClose}
            className="border px-4 py-2 rounded-lg"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            Save Patient
          </button>
        </div>
      </form>
    </div>
  );
}

export default PatientForm;
