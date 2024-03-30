import React from 'react'; 
import { useParams } from 'react-router-dom';


function HostWorkshopDetails() {
  const {id}=useParams();
  const [currentWorkshop, setCurrentWorkshop]=React.useState(null);

  React.useEffect(() => {
    fetch(`/api/host/workshops/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentWorkshop(data.workshops));
  }, [id]);

 

  if(!currentWorkshop){
    <h1>Loading...</h1>
  }
  return (
    <section> 

            <div className="container"> 

                <div className=""> 

                    <img src={currentWorkshop.img} width={150} /> 

                    <div className=""> 

                      {currentWorkshop.placesAvailable}

                        <h3>{currentWorkshop.title}</h3> 

                        <h4>${currentWorkshop.price}</h4> 

                    </div> 

                </div> 

            </div> 

        </section> 
  )
}

export default HostWorkshopDetails