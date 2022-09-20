import { Route, Routes } from "react-router-dom";
import Login from "../../components/login";
import AdminRoute from "../../routes/index.route";

function MainAdmin() {
    return ( 
        <div>
            <Routes>
                <Route exact path='/admin/*' element={<AdminRoute />}/>
                <Route exact path='/' element={<Login />}/>
            </Routes>
        </div>
     );
}

export default MainAdmin;