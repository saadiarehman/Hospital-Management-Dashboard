import { Bell, ChevronDown, Menu, Search, UserRound } from "lucide-react"

function Navbar(){
    return(
        <div className="flex justify-between p-1 rounded">
            <div className="flex items-center justify-between p-5 rounded min-w-1/3">
                <Menu size={24} color="blue" className="hover:scale-110 transition-transform" />
                <div className="relative">
                    <Search size={20} color="blue" className="absolute left-3 top-1/2 -translate-y-1/2 hover:size-6"  />
                    <input type="search" 
                    className="border border-blue-100 w-96 py-2 pl-10 pr-3 rounded text-blue-800 hover:border-blue-800 focus:border-blue-800 focus:outline-none" 
                    placeholder="Search patients,doctors, and appointments ..."  />
                </div>
            </div>
            <div className="flex items-center justify-evenly p-5 min-w-1/5">
                <Bell size={30} color="blue" className="hover:size-8" />
                <div className="h-10 border-l-2 border-gray-300" />
                <UserRound size={40} color="blue" className="hover:size-8"/>
                <div className="text-blue-800 text-xl font-bold hover:text-2xl">Admin</div>
                 <ChevronDown size={25} color="blue" className="hover:size-8" />
            </div>
        </div>
        
    )
}

export default Navbar