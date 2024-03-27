
import './App.css';
import React from 'react'; 
import LayoutCustomers from './Layout/LayoutCustomers';
import Home
 from './pages/Home';
 import About from "./pages/About";
 import Contact from "./pages/Contact";
 import Workshop from "./pages/Workshops.jsx";

import { BrowserRouter,Routes,Route } from 'react-router-dom'


function App() {
  return (

    
     <BrowserRouter>
     <LayoutCustomers/>
    <Routes> 

     <Route path="/" element={<Home />} /> 

    <Route path="/about" element={<About />} />  
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/workshop" element={<Workshop/>}/>

  </Routes> 
    </BrowserRouter>
    
   
  );
}

export default App;
