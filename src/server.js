import { createServer, Model } from "miragejs" 
createServer({ 

    models: { 

        products: Model, 

    }, 

    seeds(server) { 

        server.create("product", {    
            id:1,
            // img:require("/assets/website-imgs/products/5.png"),
            title:"Tulsi ",
            description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, praesentium",
            tags:["stress reliefs","insomnia"],
            price:25,
            available:true,
           category:"Herbs",
           reviews:["","",] }) 

        server.create("product", {  
            id:2,
            // img:require("./assets/website-imgs/products/6.png"),
            title:"Thyme ",
            description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, praesentium",
            tags:["cough","antiseptic","sinnus"],
            price:25,
            available:true,
           category:"Herbs",
           reviews:["Lorem, ipsum dolor sit amet consectetur adipisicing elit","Lorem, ipsum dolor sit amet consectetur adipisicing elit",]
        }) 

        server.create("product", 
        {   id:3,
            // img:require("./assets/website-imgs/products/7.png"),
            title:"Burdock ",
            description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, praesentium",
            tags:["arthiris","fibromyalgia,","sciatica"],
            price:12,
            available:true,
           category:"Herbs",
           reviews:["Lorem, ipsum dolor sit amet consectetur"," amet consectetur adipisicing elit."],
        
        }
        ) 

        server.create("product",
        {  id:4,
            // img:require("./assets/website-imgs/products/2.png"),
            title:"Relax Mushroom ",
            description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, praesentium",
            tags:["relax","calmness"],
            price:20,
            available:true,
           category:"Mushroom",
           reviews:["","",]
        
        }
         ) 

        server.create("product",{   
            id:5,
            // img:require("./assets/website-imgs/products/3.png"),
            title:"White Sage",
            description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, praesentium",
            tags:["relax","purification"],
            price:5,
            available:true,
           category:"Rituals",
           reviews:["Lorem, ipsum dolor sit amet consectetur "]
        
        }) 

        server.create("product", 
        {   id:6,
            // img:require("./assets/website-imgs/products/8.png"),
            title:"Palo Santo",
            description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, praesentium Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, praesentium Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, praesentium",
            tags:["relax","good luck"],
            price:8,
            available:true,
            category:"Rituals",
            reviews:["Lorem, ipsum dolor sit amet consectetur"]
        
        }) 
        server.create("product", 
        {    id:7,
            // img:require("./assets/website-imgs/products/7.png"),
            title:"Flourite",
            description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, praesentium",
            tags:["flow","clarity", "decision"],
            price:20,
            available:false,
            category:"Rituals",
            reviews:["Lorem, ipsum dolor sit amet consectetur"]
        
        }
        ) 
        server.create("product",
        {   id:8,
            // img:require("./assets/website-imgs/products/4.png"),
            title:"Master Mushroom ",
            description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, praesentium",
            tags:["immunity","vitality","stress"],
            price:60,
            available:true,
             category:"Mushroom",
           reviews:["","",]
        
        }
        )
        server.create("product",{   id:9,
            // img:require("./assets/website-imgs/products/1.png"),
            title:"Lion`s main",
            description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, praesentium",
            tags:["nerve","memory","focus"],
            price:30,
            available:true,
           category:"Mushroom",
           reviews:[" ipsum dolor sit amet consectetur adipisicing elit"]
        
        })

    }, 

    routes() { 

        this.namespace = "api" 

        this.get("/products", (schema, request) => { 

            return schema.products.all() 

        }) 

         

        this.get("/products/:id", (schema, request) => { 

            const id = request.params.id 

            return schema.products.find(id) 

        }) 

    } 

}) 