import { Route, Routes } from "react-router-dom";
import AdminComponents from "../components";
import Register from "../components/register";
import BrandRoute from "./brand.route";
import CategoryRoute from "./category.route";
import CustomerRoute from "./customer.route";
import EmployeeRoute from "./employee.route";
import OrderRoute from "./order.route";
import ProductRoute from "./products.route";

function AdminRoute() {
    return ( 
        <div>
            <Routes>
                <Route exact path='/orders/*' element={<OrderRoute />}/>
                <Route exact path='/products/*' element={<ProductRoute />}/>
                <Route exact path='/categories/*' element={<CategoryRoute />}/>
                <Route exact path='/brands/*' element={<BrandRoute />}/>
                <Route exact path='/customers/*' element={<CustomerRoute />}/>
                <Route exact path='/employees/*' element={<EmployeeRoute />}/>
                <Route exact path='/register/' element={<Register />}/>

                <Route exact path='/' element={<AdminComponents />}/>
            </Routes>
        </div> 
    );
}

export default AdminRoute;