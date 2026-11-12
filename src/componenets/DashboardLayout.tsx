import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

function DashboardLayout(){
    return(
        <div>
            <div  className="grid grid-cols-[20%_80%] min-h-screen">
                <Sidebar />
            
                <div>
                    <Navbar />
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout