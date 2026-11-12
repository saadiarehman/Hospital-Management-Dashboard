function AppointmentStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 p-5 text-center w-1/2">

      <div className="border border-blue-100 p-3 rounded shadow-xl hover:bg-blue-400 hover:text-white">
        <p>All</p>
      </div>

      <div className="border border-blue-100 p-3 rounded shadow-xl  hover:bg-blue-400 hover:text-white">
        <p>Upcoming</p>
       
      </div>

      <div className="border border-blue-100 p-3 rounded shadow-xl  hover:bg-blue-400 hover:text-white">
        <p>Completed</p>
      </div>
      <div className="border border-blue-100 p-3 rounded shadow-xl  hover:bg-blue-400 hover:text-white">
        <p>Cancel</p>
      </div>
    </div>
  );
}

export default AppointmentStats;