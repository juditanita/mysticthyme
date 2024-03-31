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
          <BackToAllArrow>all workshops</BackToAllArrow>
          <div className="container">
            <img src={currentWorkshop.img} />
            <h3>{currentWorkshop.title}</h3>
            <span>{currentWorkshop.price}</span>
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
