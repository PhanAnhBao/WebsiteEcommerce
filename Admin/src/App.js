import HeaderAdmin from './layout/header';
import MainAdmin from './layout/main';
import { Route, Routes} from 'react-router-dom';
import './App.css';

function App() {
  
  return (
    <div className="App">
      
      <nav className='Header__app'>
        <Routes>
            <Route exact path='/admin/*' element={<HeaderAdmin />} />
            <Route exact path='/admin/login' element='' />
            <Route exact path='/admin/register' element='' />
        </Routes>
        
      </nav>

      <section className='sec'>
        <MainAdmin />
      </section>

    </div>
  );
}

export default App;
