import './App.css';
import React from 'react';
import LayoutCustomers from './Layout/LayoutCustomers';
import Home from './pages/Home';
import ProductAll from './pages/ProductAll.jsx';
import About from './pages/About';
import Contact from './pages/Contact';
import Workshop from './pages/Workshops.jsx';
import ProductDetails from './pages/ProductDetails.jsx';

import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom';
import HostLayout from './Layout/HostLayout.jsx';
import HostWorkshopInfo from './Host/HostWorkshopInfo.jsx';
import HostWorkshopPhotos from './Host/HostWorkshopPhotos.jsx';
import HostWorkshopPricing from './Host/HostWorkshopPricing.jsx';
import Income from './Host/Income.jsx';
import Dashboard from './Host/Dashboard.jsx';
import Cart from './pages/Cart.jsx';

import HostWorkshopDetails from './Host/HostWorkshopDetails.jsx';
import HostWorkshop from './Host/HostWorkshop.jsx';
import HostReviews from './Host/HostReviews.jsx';
import Checkout from './pages/Checkout.jsx';
import NotFound from './pages/NotFound.jsx';
import Login from './components/Login.jsx';
import AuthRequired from './components/AuthRequired.jsx';

function App () {
  return (
    <BrowserRouter>

      <Routes>
      <Route path="*" element={<NotFound/>} />
        <Route path="/" element={<LayoutCustomers />}>
        
          <Route index element={<Home />} />

          <Route path="about" element={<About />} />
          <Route path="login" element={<Login/>}/>
          <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
          {/* route for product */}
          <Route path="products">

            <Route index element={<ProductAll />} />

            <Route path=":id" element={<ProductDetails />} />

            

          </Route>

          <Route path="contact" element={<Contact />} />
          <Route path="workshops" element={<Workshop />} />

        </Route>

        {/* ----host layout----- */}
        <Route element={<AuthRequired/>}>
        <Route path="host" element={<HostLayout />}>

          <Route index element={<Dashboard />} />

          <Route path="income" element={<Income />} />

          <Route path="reviews" element={<HostReviews />} />

          <Route path="workshops" element={<Outlet />}>
            <Route index element={<HostWorkshop />} />

            <Route path=":id" element={<HostWorkshopDetails />}>
              <Route info element={<HostWorkshopInfo />} />
              <Route path="pricing" element={<HostWorkshopPricing />} />
              <Route path="photos" element={<HostWorkshopPhotos />} />

            </Route>
          </Route>
        </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
