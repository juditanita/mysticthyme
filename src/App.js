
import './App.css';
import React from 'react'; 
import LayoutCustomers from './Layout/LayoutCustomers';
import Home
 from './pages/Home';
 import ProductAll from "./pages/ProductAll.jsx";
 import About from "./pages/About";
 import Contact from "./pages/Contact";
 import Workshop from "./pages/Workshops.jsx";
 import ProductDetails from "./pages/ProductDetails.jsx"

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HostLayout from './Host/HostLayout.jsx';
import Income from "./Host/Income.jsx";
import Reviews from "./Host/Reviews.jsx";


function App() {
  return (

    
     <BrowserRouter>
  
    <Routes> 
<Route element={<LayoutCustomers/>}>
     <Route path="/" element={<Home />} /> 

    <Route path="/about" element={<About />} /> 
    <Route path="/products" element={<ProductAll/>}/>
     

<Route path="/products/:id" element={<ProductDetails />} />  

    <Route path="/contact" element={<Contact/>}/>
    <Route path="/workshops" element={<Workshop/>}/>
    </Route>
    <Route path="/host" element={<HostLayout />} > 

<Route path="/host/income" element={<Income />} /> 

<Route path="/host/reviews" element={<Reviews />} /> 

</Route> 
  </Routes> 
    </BrowserRouter>
    
   
  );
}

export default App;
