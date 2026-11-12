import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import DashboardLayout from '../componenets/DashboardLayout'
import Dashboard from '../pages/Dashboard'
import Patients from '../pages/Patients'
import Doctors from '../pages/Doctors'
import Appointments from '../pages/Appointments'
import Departments from '../pages/Departments'
import MedicalRecords from '../pages/MedicalRecords'
import Billings from '../pages/Billings'
import Reports from '../pages/Reports'
import Settings from '../pages/Settings'

export default function AppRoutes() {
  return <BrowserRouter><Routes>
    <Route element={<DashboardLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="patients" element={<Patients />} />
      <Route path="doctors" element={<Doctors />} />
      <Route path="appointments" element={<Appointments />} />
      <Route path="departments" element={<Departments />} />
      <Route path="medical-records" element={<MedicalRecords />} />
      <Route path="billing" element={<Billings />} />
      <Route path="reports" element={<Reports />} />
      <Route path="settings" element={<Settings />} />
    </Route>
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes></BrowserRouter>
}
