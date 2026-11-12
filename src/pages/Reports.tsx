import ReportCards from "../componenets/reports/ReportCards"
import ReportMonthlyChart from "../componenets/reports/ReportsMonthlyChart"

function Reports(){
     return(
        <div className="p-5">
            <div className="flex justify-between p-5 items-center w-full">
                <div>
                    <h1 className="text-5xl font-bold text-blue-800 mb-3">Reports </h1>
                    <span className="text-blue-300 font-bold text-xl">View hospital records and analytics</span>
                </div>
                <div className="flex items-center gap-5 w-1/2 text-lg text-blue-950 font-bold">
                    <select className="border border-gray-300 rounded-lg p-3 w-1/2 ">
                        <option value="">Select Report Type</option>
                        <option value="Patient Reports">Patient Reports</option>
                        <option value="Doctor Reports">Doctor Reports</option>
                        <option value="Appointment Reports">Appointment Reports</option>
                        <option value="Department Reports">Department Reports</option>
                        <option value="Revenue Reports">Revenue Reports</option>
                        <option value="Billing Reports">Billing Reports</option>
                        <option value="Admission Reports">Admission Reports</option>
                        <option value="Discharge Reports">Discharge Reports</option>
                    </select>
                    <select className="border border-gray-300 rounded-lg p-3 w-1/2">
                        <option value="">Select Report Type</option>
                        <option value="Patient Reports">Patient Reports</option>
                        <option value="Doctor Reports">Doctor Reports</option>
                        <option value="Appointment Reports">Appointment Reports</option>
                        <option value="Department Reports">Department Reports</option>
                        <option value="Revenue Reports">Revenue Reports</option>
                        <option value="Billing Reports">Billing Reports</option>
                        <option value="Admission Reports">Admission Reports</option>
                        <option value="Discharge Reports">Discharge Reports</option>
                    </select>
                </div>
            
            </div>
           <ReportCards />
           <ReportMonthlyChart />
           
        </div>
       
    )
}

export default Reports