import React from 'react';
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';
import NavbarDash from '../src/component/homePage/Navbar';
//import Footer from '../src/component/homePage/Footer';
import Slider from './component/homePage/slider';


function App() {
  return (
    <BrowserRouter>
      <div className="">
     
        <NavbarDash />
        
        <Slider />
        
       
       
      </div>
    </BrowserRouter>
  );
}

export default App;
