import { Route, Routes } from "react-router-dom";
import Create from "../components/product/create";
import Edit from "../components/product/edit";
import TableList from "../components/product/product-list";

function ProductRoute() {
    return ( 
        <div>
            <Routes>
                <Route exact path='/:name' element={<TableList />}/>
                <Route exact path='/:id' element={<TableList />}/>
                <Route exact path='/:id/edit' element={<Edit />}/>
                <Route exact path='/create' element={<Create />}/>
                <Route exact path='/' element={<TableList />}/>
            </Routes>
        </div>
     );
}

export default ProductRoute;