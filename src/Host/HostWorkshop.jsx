import React from 'react'
import { Link } from 'react-router-dom';
import WorkshopCard from '../components/ShortComponets/WorkshopCard';

function HostWorkshop() {
  const [workshops, setWorkshops] = React.useState([]) ;
  React.useEffect(() => { 

    fetch("/api/host/workshops") 

        .then(res => res.json()) 

        .then(data => setWorkshops(data.workshops)) 

}, []) 
const workshopEl=workshops.map(workshop=>{
  const {id}=workshop
  
  return(
    <Link to={`/host/workshops/${id}`}>
      <WorkshopCard key={id} {...workshop} classN={`hidden`}/>
    
     

   </Link>

  )})
  return (
    <section className='container'>
    <h1>Your listed workshops</h1>



<div className=""> 

    { 

        workshops.length > 0 ? ( 

            <section> 

                {workshopEl} 

            </section> 

        ) : ( 

                <h2>Loading...</h2> 

            ) 

    } 

</div> 

</section> 
 
    
  )
}

export default HostWorkshop
