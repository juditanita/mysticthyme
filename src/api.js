export async function getProducts() { 

    const res = await fetch("/api/products") 

    const data = await res.json() 

    return data.products 

} 

// export async function getProductDetails(){
//     const resp=await fetch(`/api/products/${params.id}`)
//     const data=await resp.json()
//       return data.products
     
//   }
