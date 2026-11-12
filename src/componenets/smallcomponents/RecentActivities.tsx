
import { Activity } from "lucide-react";

function RecentActivities() {
  const activities = [
    {
      id: 1,
      message: "New patient registered",
      name: "Ahmed Ali",
      time: "5 minutes ago",
      color: "bg-blue-500",
    },
    {
      id: 2,
      message: "Appointment completed",
      name: "Fatima Noor",
      time: "15 minutes ago",
      color: "bg-green-500",
    },
    {
      id: 3,
      message: "New doctor added",
      name: "Dr. Sarah",
      time: "30 minutes ago",
      color: "bg-purple-500",
    },
    {
      id: 4,
      message: "Payment received",
      name: "Omar Hassan",
      time: "1 hour ago",
      color: "bg-yellow-500",
    },
  ];

  return (
    <div className="border border-gray-200 rounded-xl shadow-xl p-5">

      {/* Header */}
      <div className="flex items-center gap-3 mb-1">
        <Activity size={22} color="#1E40AF" />

        <h2 className="font-bold text-xl">
          Recent Activities
        </h2>
      </div>

      {/* Activities */}
      <div className="flex flex-col gap-2">

        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start gap-3"
          >
            {/* Activity Indicator */}
            <div
              className={`w-3 h-3 rounded-full mt-1.5 ${activity.color}`}
            />

            {/* Activity Details */}
            <div className="flex-1">
              <p className="font-medium">
                {activity.message}
              </p>

              <p className="text-sm text-gray-500">
                {activity.name}
              </p>

              <p className="text-xs text-gray-400 mt-1">
                {activity.time}
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default RecentActivities;
