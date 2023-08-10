import './App.css';
import { Routes, Route } from 'react-router-dom';
import { db } from './firebaseConfig';
import Home from './Files/Home';
import Header from './Components.js/Header';
import PropertyDetails from './Files/PropertyDetails';
import Contact from './Components.js/Contact';
import Footer from './Components.js/Footer';
import HouseList from './Components.js/HouseList';
import AboutUs from './Components.js/Aboutus';

function App() {
  return (
    <div className='h-12 mx-auto bg-white'>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/HouseList' element={<HouseList />} />
      <Route path='/About' element={<AboutUs />} />
      <Route path='/property/:id' element={<PropertyDetails />} />
    </Routes>
    <Contact/>
   <Footer/>
  </div>
  );
}

export default App;
