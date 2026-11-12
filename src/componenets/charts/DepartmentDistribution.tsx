import { ChartPie} from "lucide-react"
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

function DepartmentDistribution(){
      const data = [
                { name: "Cardiology", patients: 100 },
                { name: "Neurology", patients: 80 },
                { name: "Pediatrics", patients: 70 },
                { name: "Orthopedics", patients: 60 },
                { name: "Others", patients: 40 },
            ];
            const COLORS = [
                "#3B82F6",
                "#10B981",
                "#A855F7",
                "#F59E0B",
                "#EF4444",
            ];
    return (
  <div className="border border-gray-200 rounded-xl shadow-xl p-5">

    {/* Heading */}
    <div className="flex items-center gap-3 mt-5 mb-5">
      <ChartPie size={22} color="#1E40AF" />

      <h2 className="font-bold text-xl">
        Department Distribution
      </h2>
    </div>

    {/* Chart */}
    <div className="w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="patients"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            innerRadius={50}
            paddingAngle={3}
          >
            {data.map((entry, index) => (
              <Cell
                key={entry.name}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>

  </div>
)
}

export default DepartmentDistribution