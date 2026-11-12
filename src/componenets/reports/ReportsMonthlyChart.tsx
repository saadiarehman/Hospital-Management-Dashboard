import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function ReportMonthlyChart(){
     const revenueData = [
    { month: "Jan", revenue: 3000 },
    { month: "Feb", revenue: 4000 },
    { month: "Mar", revenue: 5000 },
    { month: "Apr", revenue: 6000 },
    { month: "May", revenue: 7000 },
    { month: "Jun", revenue: 8000 },
    { month: "Jul", revenue: 9000 },
    { month: "Aug", revenue: 10000 },
  ];
    return(
    <div className="bg-white border border-blue-100 rounded-xl p-5 w-full">
      <h2 className="text-xl font-blue-900 font-bold mb-5 p-5">Monthly Revenue</h2>
        <div className="flex justify-center">
            <ResponsiveContainer width="75%" height={300}>
                <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="month" />

                <YAxis
                    domain={[0, 10000]}
                    ticks={[0, 5000, 10000]}
                    tickFormatter={(value) => `${value / 1000}k`}
                />

                <Tooltip formatter={(value) => [`SAR ${value}`, "Revenue"]} />

                <Bar dataKey="revenue" barSize={50} fill="#93C5FD" radius={[5, 5, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
     
    </div>
    )
}

export default ReportMonthlyChart