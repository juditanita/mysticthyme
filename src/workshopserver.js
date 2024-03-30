import {createServer, Model} from 'miragejs';

createServer ({
  models: {
    workshops: Model,
  },
  seeds(server) {
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



  routes () {
    this.namespace = 'api';
    this.pretender.get ('data:image/*', this.pretender.passthrough);

    this.get ('/host/workshops', (schema, request) => {
      return schema.workshops.where ({hostId:"1234"});
    });
 
  
    

    this.get ('/host/workshops/:id', (schema, request) => {
      const id = request.params.id;

      return schema.workshops.findBy ({id,hostId:"1234"});
      
    });
  },
});
