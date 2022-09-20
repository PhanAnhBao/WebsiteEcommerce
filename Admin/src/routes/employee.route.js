import { Route, Routes } from "react-router-dom";
import CreateEmployee from "../components/employee/create";
import TableEmployeeList from "../components/employee/employee-list";
import EditEmployee from "../components/employee/edit";


function EmployeeRoute() {
    return ( 
        <div>
            <Routes>
                <Route exact path='/:id/edit' element={<EditEmployee />}/>
                <Route exact path='/create' element={<CreateEmployee />}/>
                <Route exact path='/' element={<TableEmployeeList />}/>
            </Routes>
        </div>
     );
}

export default EmployeeRoute;