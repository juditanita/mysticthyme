export async function getProducts () {
  const res = await fetch ('/api/products');

  if (res.ok) {
    const data = await res.json ();
    return data.products;
  } else {
    throw new Error ('error');
  }
}


// export async function getProductDetails(){
//     const resp=await fetch(`/api/products/${params.id}`)
//     const data=await resp.json()
//       return data.products

//   }
