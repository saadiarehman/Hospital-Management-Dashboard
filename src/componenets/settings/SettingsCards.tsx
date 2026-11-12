import { Bell, Hospital, SlidersHorizontal, UserRound} from "lucide-react"

function SettingsCards(){
    return(
        <>
         <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-5 gap-4 ml-3 mr-3 text-blue-900">
                    <div className=" border border-blue-100 flex flex-col p-5 rounded items-center shadow">
                            <Hospital size={60} color="#1E40AF" />
                            <h1 className="text-2xl font-bold mt-5">Hospital Profile</h1>
                            <span className="text-lg font-bold">Update hospital information</span>
                        
                    </div>
                    <div className="border border-blue-200 flex flex-col p-5 rounded items-center shadow">
                        <UserRound size={60} color="#1E40AF" />    
                        <h1 className="text-2xl font-bold mt-5">Account Settings</h1>
                        <span className="text-lg font-bold">Manage admin account</span>
                    </div>
                    <div className="border border-blue-200 flex flex-col p-5 rounded items-center shadow">
                        <Bell size={60} color="#1E40AF" />
                        <h1 className="text-2xl font-bold mt-5">Notifications</h1>
                        <span className="text-lg font-bold">Configure notifications</span>                   
                    </div>
                    <div className="border border-blue-200 flex flex-col p-5 rounded items-center shadow">
                        <SlidersHorizontal size={60} color="#1E40AF" />
                        <h1 className="text-2xl font-bold mt-5">System Preferences</h1>
                        <span className="text-lg font-bold">Customize system settings</span>
                    </div>
            </div>
        </>
    )
}

export default SettingsCards