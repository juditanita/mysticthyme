import React from "react";
import { useParams, Outlet, NavLink } from "react-router-dom";
import BackToAllArrow from "../components/ShortComponets/BackToAllArrow";


function HostWorkshopDetails() {
  const activeStyles = {
    fontWeight: "bold",

    textDecoration: "underline",

    color: "#161616",
  };
  const params = useParams();
  const [currentWorkshop, setCurrentWorkshop] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/host/workshops/${params.id}`)
      .then((res) => res.json())
      .then((data) => setCurrentWorkshop(data.workshops));
  }, [params.id]);

  return (
    <>
      {currentWorkshop ? (
        <section>
           <BackToAllArrow linkGo={".."} relative="path">all workshops</BackToAllArrow> 
          


          <div className="container">
           
 <div className="md:grid grid-cols-3  items-strech py-8 md:py-10 lg:py-8 b">
      <div className="md:col-span-1  w-full mx-auto">
        <img
          src={currentWorkshop.img}
          alt={currentWorkshop.title}
          className="h-full object-center object-cover md:block w-11/12 md:w-10/12"
        />
      </div>

      <div className="md:col-span-2 flex justify-between w-11/12 ">
        <div className=" items-start justify-start ">
          <h5 className="text-xl font-bold leading-3 text-gray-800 md:pt-0 pt-4">
            Available place left: {currentWorkshop.placesAvailable}
          </h5>
          <p className="text-2xl py-8 font-black leading-none text-gray-800">
           Title: {currentWorkshop.title}
          </p>
          {/* button is increase and decrease */}
          <p className="text-base leading-relaxed text-gray-600 pt-2 w-full">
           Description: {currentWorkshop.description}
          </p>
<h4 className="text-red-800 pt-6">${currentWorkshop.price}/price</h4>
         
        </div>
       
      </div>
    </div>








            {/* there will be links and other navbar for the info photos etc so the navbar shared between all the links */}
            <nav className="flex justify-between mx-40">
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
            </nav>

            <Outlet context={{currentWorkshop}} />
          </div>
        </section>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}

export default HostWorkshopDetails;
