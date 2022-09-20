import { Route, Routes } from 'react-router-dom';
import './App.scss';
import './Queries.scss';
import Footer from './layout/footer';
import Header from './layout/header';
import Main from './layout/main';
import Sidebar from './layout/sidebar';
import Slider from './layout/slider';
import Login from './components/login';
import Register from './components/register';
import Contact from './components/contact';
import AboutUs from './components/about-us';
import Cart from './components/cart';
import Checkout from './components/checkout';
import Order from './components/order';

function App() {
  return (
    <div className="App">
      <nav className='Header__app'>
        <Routes>
          <Route exact path='/*' element={<Header />} />
          <Route exact path='/login' element='' />
          <Route exact path='/register' element='' />
        </Routes>
      </nav>
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />

      </Routes>
      <section className='Main__app '>
        <section class="section--slider">
          <Routes>
            <Route exact path='/' element={<Slider />} />
            <Route exact path='/home' element={<Slider />} />
            <Route exact path='/product' element={<Slider />} />
          </Routes>
        </section>
        <div className='section container'>
          <Routes>
            <Route exact path='/*' element={<Sidebar />} />
            <Route exact path='/login' element='' />
            <Route exact path='/register' element='' />
            <Route exact path='/contact' element='' />
            <Route exact path='/about-us' element='' />
            <Route exact path='/cart' element='' />
            <Route exact path='/checkout' element='' />
            <Route exact path='/order' element='' />
          </Routes>
          <Routes>
            <Route exact path='/*' element={<Main />} />
            <Route exact path='/contact' element='' />
            <Route exact path='/cart' element='' />
            <Route exact path='/checkout' element='' />
            <Route exact path='/order' element='' />
          </Routes>

        </div>
        <Routes>
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/about-us' element={<AboutUs />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/checkout' element={<Checkout />} />
          <Route exact path='/order' element={<Order />} />
        </Routes>
      </section>
      <Routes>
        <Route exact path='/*' element={<Footer />} />
        <Route exact path='/login' element='' />
        <Route exact path='/register' element='' />
      </Routes>


    </div>
  );
}

export default App;
