import React from 'react'
import { Link } from 'react-router-dom';

function HostWorkshop() {
  const [workshops, setWorkshops] = React.useState([]) ;
  React.useEffect(() => { 

    fetch("/api/host/workshops") 

        .then(res => res.json()) 

        .then(data => setWorkshops(data.workshops)) 

}, []) 
const workshopEl=workshops.map(workshop=>{
  const {id, img,title, description,placesAvailable,reviews,price}=workshop;
  return(
    <Link to={`/host/workshops/${id}`}>
        <div key={id}>
      <img src={img} alt={title}/>
      <h3>{title}</h3>
      <h6>{price}</h6>
      <p>{description}</p>
      <span>{placesAvailable}</span>
      {reviews.map(rev=><p >{rev}</p>)}

    </div></Link>

  )
})
  return (
    <section className='container'>
      <h2>Your listed workshops</h2>
    {
    workshops&& {workshopEl}
  }
  </section>
    
  )
}

export default HostWorkshop
