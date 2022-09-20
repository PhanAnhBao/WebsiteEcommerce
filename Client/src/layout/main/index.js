import './styles.scss';
import {
    Routes, Route
} from 'react-router-dom';
import Marketing from '../../routes/marketing.route';

function Main() {
    return ( 
        <div className="section--right">
            <Routes>
                <Route exact path='/*' element={<Marketing />}/>
            </Routes>
        </div> 
    );
}

export default Main;