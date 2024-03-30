import React from "react";
import { useParams, Link } from "react-router-dom";
import BackToAllArrow from "../components/ShortComponets/BackToAllArrow";

function HostWorkshopDetails() {
  const params = useParams();
  const [currentWorkshop, setCurrentWorkshop] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/host/workshops/${params.id}`)
      .then((res) => res.json())
      .then((data) => setCurrentWorkshop(data.workshops));
  }, [params.id]);


  return (<>
    {currentWorkshop?(<section>

      <BackToAllArrow>all workshops</BackToAllArrow>
      <div className="container">
         <img src={currentWorkshop.img} /> 
         <h3>{ currentWorkshop.title}</h3> 
      </div>
 </section>):(<h1>Loading...</h1>)}
 </>
 
  );
}

export default HostWorkshopDetails;
