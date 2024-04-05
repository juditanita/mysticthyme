

export async function getProducts(id) { 

  const url = id ? `/api/products/${id}` : "/api/products"; 

  const res = await fetch(url); 

  if (res.ok) { 

    const data = await res.json(); 

    return data.products; 

  } else { 

    throw new Error("error"); 

  } 

} 


export async function getWorkshops(id) { 

  const url = id ? `/api/workshops/${id}` : "/api/workshops"; 

  const res = await fetch(url); 

  if (res.ok) { 

    const data = await res.json(); 

    return data.workshops; 

  } else { 

    throw new Error("error"); 

  } 

} 

export async function getHostWorkshops(id) { 

  const url = id ? `/api/host/workshops/${id}` : "/api/host/workshops"; 

  const res = await fetch(url); 
  if(res.ok){
    const data = await res.json(); 

    return data.workshops; 
  }
  else{
  
      throw new Error("error"); 
      
  }


 } 

 



