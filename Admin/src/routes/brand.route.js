import { Route, Routes } from "react-router-dom";
import TableBrandList from "../components/brand/brand-list";
import CreateBrand from "../components/brand/create";
import EditBrand from "../components/brand/edit";



function BrandRoute() {
    return ( 
        <div>
            <Routes>
                <Route exact path='/:id/edit' element={<EditBrand />}/>
                <Route exact path='/create' element={<CreateBrand />}/>
                <Route exact path='/' element={<TableBrandList />}/>
            </Routes>
        </div>
     );
}

export default BrandRoute;