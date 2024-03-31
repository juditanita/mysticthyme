import { createServer, Model } from "miragejs" 
createServer({ 

    models: { 

        products: Model, 
        workshops:Model,

    }, 

    seeds(server) { 

        server.create("product", {    
            id:"1",
            img:("data:image/webp;base64,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LyIgICB4bWxuczpHZXR0eUltYWdlc0dJRlQ9Imh0dHA6Ly94bXAuZ2V0dHlpbWFnZXMuY29tL2dpZnQvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwbHVzPSJodHRwOi8vbnMudXNlcGx1cy5vcmcvbGRmL3htcC8xLjAvIiAgeG1sbnM6aXB0Y0V4dD0iaHR0cDovL2lwdGMub3JnL3N0ZC9JcHRjNHhtcEV4dC8yMDA4LTAyLTI5LyIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvcmlnaHRzLyIgcGhvdG9zaG9wOkNyZWRpdD0iR2V0dHkgSW1hZ2VzL2lTdG9ja3Bob3RvIiBHZXR0eUltYWdlc0dJRlQ6QXNzZXRJRD0iMTIwMjAzMDQzOCIgeG1wUmlnaHRzOldlYlN0YXRlbWVudD0iaHR0cHM6Ly93d3cuZ2V0dHlpbWFnZXMuY29tL2V1bGE/dXRtX21lZGl1bT1vcmdhbmljJmFtcDt1dG1fc291cmNlPWdvb2dsZSZhbXA7dXRtX2NhbXBhaWduPWlwdGN1cmwiID4KPGRjOmNyZWF0b3I+PHJkZjpTZXE+PHJkZjpsaT5EaGFybWFwYWRhIEJlaGVyYTwvcmRmOmxpPjwvcmRmOlNlcT48L2RjOmNyZWF0b3I+PGRjOmRlc2NyaXB0aW9uPjxyZGY6QWx0PjxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+aG9seSBiYXNpbCBsZWF2ZXMgcGxhbnQgYXl1cnZlZGEgbWVkaWNpbmU8L3JkZjpsaT48L3JkZjpBbHQ+PC9kYzpkZXNjcmlwdGlvbj4KPHBsdXM6TGljZW5zb3I+PHJkZjpTZXE+PHJkZjpsaSByZGY6cGFyc2VUeXBlPSdSZXNvdXJjZSc+PHBsdXM6TGljZW5zb3JVUkw+aHR0cHM6Ly93d3cuZ2V0dHlpbWFnZXMuY29tL2RldGFpbC8xMjAyMDMwNDM4P3V0bV9tZWRpdW09b3JnYW5pYyZhbXA7dXRtX3NvdXJjZT1nb29nbGUmYW1wO3V0bV9jYW1wYWlnbj1pcHRjdXJsPC9wbHVzOkxpY2Vuc29yVVJMPjwvcmRmOmxpPjwvcmRmOlNlcT48L3BsdXM6TGljZW5zb3I+CgkJPC9yZGY6RGVzY3JpcHRpb24+Cgk8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJ3Ij8+CgA="),
            title:"Tulsi ",
            description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, praesentium",
            tags:["stress reliefs","insomnia"],
            price:25,
            available:true,
           category:"Herbs",
           reviews:["","",] }) 

        server.create("product", {  
            id:"2",
             img:("data:image/jpeg;base64,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"),
            title:"Thyme ",
            description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, praesentium",
            tags:["cough","antiseptic","sinnus"],
            price:25,
            available:true,
           category:"Herbs",
           reviews:["Lorem, ipsum dolor sit amet consectetur adipisicing elit","Lorem, ipsum dolor sit amet consectetur adipisicing elit",]
        }) 

        server.create("product", 
        {   id:"3",
            img:require("./assets/website-imgs/products/7.png"),
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
        {  id:"4",
        img:require("./assets/website-imgs/products/2.png"),
            title:"Relax Mushroom ",
            description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, praesentium",
            tags:["relax","calmness"],
            price:20,
            available:true,
           category:"Mushroom",
           reviews: [
            'Lorem, ipsum dolor sit amet consectetur',
            ' amet consectetur adipisicing elit.',
          ]
        
        }
         ) 

        server.create("product",{   
            id:"5",
             img:require("./assets/website-imgs/products/3.png"),
            title:"White Sage",
            description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, praesentium",
            tags:["relax","purification"],
            price:5,
            available:true,
           category:"Rituals",
           reviews:["Lorem, ipsum dolor sit amet consectetur "]
        
        }) 

        server.create("product", 
        {   id:"6",
            img:require("./assets/website-imgs/products/8.png"),
            title:"Palo Santo",
            description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, praesentium Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, praesentium Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, praesentium",
            tags:["relax","good luck"],
            price:8,
            available:true,
            category:"Rituals",
            reviews:["Lorem, ipsum dolor sit amet consectetur"]
        
        }) 
        server.create("product", 
        {    id:"7",
             img:require("./assets/website-imgs/products/7.png"),
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
        {   id:"8",
             img:require("./assets/website-imgs/products/4.png"),
            title:"Master Mushroom ",
            description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, praesentium",
            tags:["immunity","vitality","stress"],
            price:60,
            available:true,
             category:"Mushroom",
           reviews:["","",]
        
        }
        )
        server.create("product",{   id:"9",
            img:require("./assets/website-imgs/products/1.png"),
            title:"Lion`s main",
            description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, praesentium",
            tags:["nerve","memory","focus"],
            price:30,
            available:true,
           category:"Mushroom",
           reviews:[" ipsum dolor sit amet consectetur adipisicing elit"]
        
        })
        server.create('workshop', 
        {
          id: '1',
          img: require ('./assets/website-imgs/products/7.png'),
          title: ' 2 days Open heartchakra',
          description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, praesentium',
          price: 320,
          placesAvailable: 4,
          reviews: [
            'Lorem, ipsum dolor sit amet consectetur',
            ' amet consectetur adipisicing elit.',
          ],
          hostId:"1234"
        })
        server.create('workshop', {
            id: '2',
            img: require ('./assets/website-imgs/products/7.png'),
            title: '4-days shamanic retreat',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, praesentium',
      
            price: 1220,
            placesAvailable: 3,
      
            reviews: [
              'Lorem, ipsum dolor sit amet consectetur',
              ' amet consectetur adipisicing elit.',
            ],
          })
          server.create('workshop', {
            id: '3',
            img: require ('./assets/website-imgs/products/7.png'),
            title: ' 1 day Mindfull wellness',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, praesentium',
      
            price: 120,
            placesAvailable: 0,
      
            reviews: [
              'Lorem, ipsum dolor sit amet consectetur',
              ' amet consectetur adipisicing elit.',
            ],
            hostId:"1234"
          })

    }, 

    routes() { 

        this.namespace = "api" 
        this.pretender.get('data:image/*', this.pretender.passthrough);

        this.get("/products", (schema, request) => { 

            return schema.products.all() 

        }) 

         

        this.get("/products/:id", (schema, request) => { 

            const id = request.params.id 

            return schema.products.find(id) 

        }) 
        this.get ('/host/workshops', (schema, request) => {
            return schema.workshops.where ({hostId:"1234"});
          });
          this.get ('/host/workshops/:id', (schema, request) => {
            const id = request.params.id;
      
            return schema.workshops.findBy ({id,hostId:"1234"});
            
          });

    } 

}) 