import SettingsCards from "../componenets/settings/SettingsCards"

function Settings(){
    return(
        <>
            <div className="flex justify-between p-5">
                <div className="flex items-center gap-4">
                    <div>
                        <h1 className="text-5xl font-bold text-blue-800 p-1">Settings </h1>
                        <span className="text-blue-300 text-xl font-bold">Manage hospital settings</span>
                    </div>
                </div>   
            </div>
            <SettingsCards />
           
           
        </>
       
    )
}

export default Settings