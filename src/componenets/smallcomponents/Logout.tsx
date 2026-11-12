import { LogOut } from "lucide-react";
function Logout (){
    return(
        <div className="flex items-center">

            <LogOut size={20} />
            <div className="text-xl ml-2">
                 Logout
            </div>
           
        </div>
    )
}

export default Logout