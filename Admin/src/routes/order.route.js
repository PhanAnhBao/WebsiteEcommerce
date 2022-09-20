import { Route, Routes } from "react-router-dom";
import TableOrderList from "../components/order/orders-list";


function OrderRoute() {
    return ( 
        <div>
            <Routes>
                <Route exact path='/' element={<TableOrderList />}/>
            </Routes>
        </div>
     );
}

export default OrderRoute;