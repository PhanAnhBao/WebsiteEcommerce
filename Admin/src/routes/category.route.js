import { Route, Routes } from "react-router-dom";
import TableCategoryList from "../components/category/category-list";
import CreateCategory from "../components/category/create";
import EditCategory from "../components/category/edit";


function CategoryRoute() {
    return ( 
        <div>
            <Routes>
                <Route exact path='/:id/edit' element={<EditCategory />}/>
                <Route exact path='/create' element={<CreateCategory />}/>
                <Route exact path='/' element={<TableCategoryList />}/>
            </Routes>
        </div>
     );
}

export default CategoryRoute;