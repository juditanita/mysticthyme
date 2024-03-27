import React from "react";

import Header from "../components/Header";

import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function LayoutCustomers() {

  return (
    <>
      <div className="sticky top-0 bg-white">
       
        <Header />
      </div>
<main className="mt-"><Outlet /></main>
      
      <Footer />
    </>
  );
}

export default LayoutCustomers;
