
import { NavLink } from "react-router-dom";
import HospitalLogo from "./smallcomponents/HospitalLogo";
import Logout from "./smallcomponents/Logout";

import {
  House,
  UserRound,
  Stethoscope,
  CalendarDays,
  LayoutGrid,
  FileText,
  CreditCard,
  ChartNoAxesColumn,
  Settings,
  CircleHelp,
} from "lucide-react";

export default function Sidebar() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 rounded-lg p-2 ${
      isActive
        ? "bg-blue-600 text-white"
        : "hover:bg-blue-500"
    }`;

  return (
    <div className="flex flex-col min-h-screen w-full min-w-0 bg-black text-white rounded">
      <HospitalLogo />
      <hr />

      <div className="flex flex-col flex-1">
        <aside className="flex flex-col p-4 gap-4 text-xl mt-10">

          <NavLink to="/" end className={linkClass}>
            <House size={22} /> Dashboard
          </NavLink>

          <NavLink to="/patients" className={linkClass}>
            <UserRound size={22} /> Patients
          </NavLink>

          <NavLink to="/doctors" className={linkClass}>
            <Stethoscope size={22} /> Doctors
          </NavLink>

          <NavLink to="/appointments" className={linkClass}>
            <CalendarDays size={22} /> Appointments
          </NavLink>

          <NavLink to="/departments" className={linkClass}>
            <LayoutGrid size={22} /> Departments
          </NavLink>

          <NavLink to="/medical-records" className={linkClass}>
            <FileText size={22} /> Medical Records
          </NavLink>

          <NavLink to="/billing" className={linkClass}>
            <CreditCard size={22} /> Billing
          </NavLink>

          <NavLink to="/reports" className={linkClass}>
            <ChartNoAxesColumn size={22} /> Reports
          </NavLink>

          <NavLink to="/settings" className={linkClass}>
            <Settings size={22} /> Settings
          </NavLink>

        </aside>
      </div>

      <hr />

      <div className="mt-auto p-5 flex items-center gap-3">
       <CircleHelp size={20} />
       <div className="">Need Help ? <br /> <span className="text-gray-500">Contact Support</span></div>
      </div>
    </div>
  );
}
