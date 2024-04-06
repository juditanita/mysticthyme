import React from "react";
import { useParams, Outlet, NavLink } from "react-router-dom";
import BackToAllArrow from "../components/ShortComponets/BackToAllArrow";
import Loading from "../components/ShortComponets/Loading";
import { getHostWorkshops } from "../api";
import ErrorShort from "../components/ShortComponets/ErrorShort";

function HostWorkshopDetails() {
  const activeStyles = {
    fontWeight: "bold",

    textDecoration: "underline",

    color: "#161616",
  };
  const {id}= useParams();
  const [currentWorkshop, setCurrentWorkshop] = React.useState(null);
  const [error, setError] = React.useState(null); 

 const [loading, setLoading] = React.useState(false); 
  


   React.useEffect(() => {
    async function loadHWDetails(){
      setLoading(true);
     try{
       const data= await getHostWorkshops(id)
        setCurrentWorkshop(data)
      }catch(err){
        setError(err)
      }finally{
        setLoading(false)
      }
    }
   loadHWDetails()},[id])

   if(loading){
    <Loading/>
  }

  if (error) {
    <ErrorShort children={`There was an error: ${error.message}`} />;
  }
 
  return (
  
     
        <section>
        {currentWorkshop && (
          <div className="mx-4 mt-6">
            <div><BackToAllArrow linkGo={".."} relative="path" >
            all workshops
          </BackToAllArrow></div>
          

          <div className="container">
            <div className="md:grid grid-cols-3 mx-4  items-strech py-8 md:py-10 lg:py-8 b">
              <div className="md:col-span-1  w-full mx-auto">
                <img
                  src={currentWorkshop.img}
                  alt={currentWorkshop.title}
                  className="h-full object-center object-cover md:block w-11/12 md:w-10/12"
                />
              </div>

              <div className="md:col-span-2 flex justify-between w-11/12 ">
                <div className=" items-start justify-start ">
               
                  <p className="text-2xl py-8 font-black leading-none text-gray-800">
                     {currentWorkshop.title}
                  </p>
                
                 
                 
               
                </div>
              </div>
            </div>
            
            {/* there will be links and other navbar for the info photos etc so the navbar shared between all the links */}
            <nav className="flex justify-between md:mx-40 mx-4 ">
              <NavLink
                to="."
                end
                style={({ isActive }) => (isActive ? activeStyles : null)}
              >
                Details
              </NavLink>

              <NavLink
                to="pricing"
                style={({ isActive }) => (isActive ? activeStyles : null)}
              >
                Pricing
              </NavLink>
              

              <NavLink
                to="photos"
                style={({ isActive }) => (isActive ? activeStyles : null)}
              >
                Photos
              </NavLink>
              <NavLink
                to="places"
                style={({ isActive }) => (isActive ? activeStyles : null)}
              >
                Places
              </NavLink>
            </nav>
            <article className="bg-gray-200 rounded-md shadow-sm block mx-0 mt-6"> <Outlet context={{ currentWorkshop }} /></article>
           

          
          

          </div>
         </div> )}
        </section>
      
    
  );
}

export default HostWorkshopDetails;
