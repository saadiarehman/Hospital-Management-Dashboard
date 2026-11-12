import DepartmentCards from "../componenets/departments/DepartmentCards"

function Departments(){
     return(
        <div className="p-5" >
            <div>
                <div className=" text-4xl text-black font-bold">Departments</div>
                <div className="text-xl text-blue-300">Explore hospital departments</div>
                <DepartmentCards />
                
            </div>
        </div>
    )
}


export default Departments