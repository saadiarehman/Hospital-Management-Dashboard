import { Pencil, Trash2 } from "lucide-react";

function BillingTable(){
const bills = [
  {
    id: "INV-001",
    patient: "Ayesha Khan",
    amount: 500,
    status: "Paid",
    date: "16 Oct 2026",
  },
  {
    id: "INV-002",
    patient: "Usman Ahmed",
    amount: 700,
    status: "Pending",
    date: "15 Oct 2026",
  },
  {
    id: "INV-003",
    patient: "Fatima Noor",
    amount: 600,
    status: "Paid",
    date: "14 Oct 2026",
  },
  {
    id: "INV-004",
    patient: "Ahmed Ali",
    amount: 900,
    status: "Pending",
    date: "13 Oct 2026",
  },
  {
    id: "INV-005",
    patient: "Sara Malik",
    amount: 1200,
    status: "Paid",
    date: "12 Oct 2026",
  },
];
    return(
        <div className="p-3">
            <div className="flex justify-between p-1  font-bold items-center">
                <h1 className="text-3xl ">Recent Invoices</h1>
                <p className="text-blue-400 text-xl">View All</p>
            </div>
            <div className="w-full overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full min-w-200 text-left">
                <thead className="bg-blue-50 text-blue-900">
                    <tr>
                        <th className="p-4">INVOICE #</th>
                        <th className="p-4">Patient Name</th>
                        <th className="p-4">Amount</th>
                        <th className="p-4">Date</th>
                        <th className="p-4">Status</th>
                        <th className="p-4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {bills.map((bill)=>(
                        <tr key={bill.id} className="border-t border-gray-200">
                            <td className="p-4">{bill.id}</td>
                            <td className="p-4">{bill.patient}</td>
                            <td className="p-4">$ {bill.amount}</td>
                            <td className="p-4">{bill.date}</td>
                            <td className="p-4">
                                <span
                                    className={`rounded-full px-3 py-1 text-sm font-medium ${
                                                bill.status === "Paid"
                                                ? "bg-green-100 text-green-700"
                                                : bill.status === "Pending"
                                                ? "bg-yellow-100 text-red-700"
                                                : "bg-red-100 text-red-700"
                                    }`}
                                >
                                    {bill.status}
                                </span>
                            </td>
                            <td className="p-4">
                                <div className="flex items-center gap-3">
                                <button className="text-blue-600 hover:text-blue-800">
                                    <Pencil size={19} />
                                </button>

                                <button className="text-red-500 hover:text-red-700">
                                    <Trash2 size={19} />
                                </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-between items-center p-4 bg-white">
                <p className="text-sm text-gray-500">
                    Showing 1-5 of 32 billing
                 </p>

            <div className="flex gap-2">
                <button className="bg-blue-100 text-blue-800 px-3 py-1 rounded">1</button>
                <button className="border border-blue-100  px-3 py-1 rounded">2</button>
                <button className="border border-blue-100  px-3 py-1 rounded">3</button>
                <button className="border border-blue-100  px-3 py-1 rounded">›</button>
            </div>
        </div>
        </div>

        </div>
        
    )
}

export default BillingTable