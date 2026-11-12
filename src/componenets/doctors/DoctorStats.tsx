function DoctorStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full p-5 text-center">

      <div className="bg-blue-200 p-5 rounded shadow-xl">
        <p>Total Doctors</p>
        <h1 className="text-4xl font-bold">18</h1>
      </div>

      <div className="bg-green-200 p-5 rounded shadow-xl">
        <p>Active Doctors</p>
        <h1 className="text-4xl font-bold">17</h1>
      </div>

      <div className="bg-orange-200 p-5 rounded shadow-xl">
        <p>Doctors On Leave</p>
        <h1 className="text-4xl font-bold">1</h1>
      </div>

    </div>
  );
}

export default DoctorStats;