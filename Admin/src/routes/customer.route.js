import { Route, Routes } from "react-router-dom";
import CreateCustomer from "../components/customer/create";
import TableCustomerList from "../components/customer/customer-list";
import EditCustomer from "../components/customer/edit";

function CustomerRoute() {
    return ( 
        <div>
            <Routes>
                <Route exact path='/:id/edit' element={<EditCustomer />}/>
                <Route exact path='/create' element={<CreateCustomer />}/>
                <Route exact path='/' element={<TableCustomerList />}/>
            </Routes>
        </div>
     );
}

export default CustomerRoute;