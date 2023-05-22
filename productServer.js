// const { json } = require('express');
const express = require('express');
const app = express();
const cors=require('cors');
const { emptyQuery } = require('pg-protocol/dist/messages');
app.use(express.json());
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE, HEAD');
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
const port = process.env.PORT || 2410;
app.listen(port, () => console.log(`Node app listening on port ${port}!`));
app.use(cors());
const cookieParser= require('cookie-parser');
app.use(cookieParser('abcdef-3477819'));
// let cookie=require('cookie');
const cookie = require('cookie');
const { json } = require('express');
// app.use(cookie());

let users=[{email:'test123@gmail.com', password:'test123'}];
let orderData=[];
let productData=[
    {
       id: 1,
      category: "Watches",
      description:
        "The look that made Swiss watches the toast of the world. Still unbeatable.",
      imgLink:
        "https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      name: "Silver",
      price: 1600
    },
    {
       id: 2,
      category: "Watches",
      description: "Dark, black beauty. Sure to look good on the wrist.",
      imgLink:
        "https://images.pexels.com/photos/1697566/pexels-photo-1697566.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      name: "Black",
      price: 899
    },
    {
       id: 3,
      category: "Watches",
      description:
        "Multi chronographs, stop watch, timers. Altimeter. What else.",
      imgLink:
        "https://images.pexels.com/photos/2113994/pexels id-photo-2113994.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      name: "Chronograph",
      price: 1199
    },
    {
       id: 4,
      category: "Watches",
      description: "For all ages. For all times. Classic Look. Classic leather.",
      imgLink:
        "https://images.pexels.com/photos/236915/pexels-photo-236915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      name: "Classic",
      price: 1250
    },
    {
       id: 5,
      category: "Watches",
      description: "The original Apple Watch. Still a great buy.",
      imgLink:
        "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Apple v1",
      price: 999
    },
    {
       id: 6,
      category: "Watches",
      description: "Mechanical 28 jewelled watch. Connoisseur delight.",
      imgLink:
        "https://images.pexels.com/photos/47339/mechanics-movement-feinmechanik-wrist-watch-47339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      name: "Jewelled",
      price: 1999
    },
    {
       id: 7,
      category: "Sunglasses",
      description: "Desirable, reddish tint. Sure to attract attention.",
      imgLink:
        "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      name: "Tinted Red",
      price: 399
    },
    {
       id: 8,
      category: "Sunglasses",
      description: "Nostalgic, bluish tint, sure to get memories back. Vintage.",
      imgLink:
        "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      name: "Oldies",
      price: 199
    },
    {
       id: 9,
      category: "Sunglasses",
      description: "Trendy, young sunglasses with retro look. Teen favourite.",
      imgLink:
        "https://images.pexels.com/photos/1362558/pexels-photo-1362558.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Youthful",
      price: 219
    },
    {
       id: 10,
      category: "Sunglasses",
      description: "Chic sunglasses. Classic dark shades, sure to generate envy.",
      imgLink:
        "https://images.pexels.com/photos/65659/glasses-glass-circle-light-transmittance-65659.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      name: "Classic Dark",
      price: 249
    },
    {
       id: 11,
      category: "Watches",
      description: "Apple Watch Version 2. A delight.",
      imgLink:
        "https://images.pexels.com/photos/277406/pexels-photo-277406.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Apple v2",
      price: 1499
    },
    {
       id: 12,
      category: "Belts",
      description: "Stylish formal brown belt. An office favourite.",
      imgLink:
        "https://as1.ftcdn.net/jpg/02/14/48/72/500_F_214487233_Aahw3DohDu6dSSfMqWCcU1QDatxpDt6E.jpg",
      name: "Fab Brown",
      price: 149
    },
    {
       id: 13,
      category: "Handbags",
      description: "Desirable travel bag. Mix of convenience and style",
      imgLink:
        "https://images.pexels.com/photos/2534961/pexels-photo-2534961.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Travel Lite",
      price: 199
    },
    {
       id: 14,
      category: "Handbags",
      description: "3 Pockets, 2 Zips -  ideal for shopping and parties",
      imgLink:
        "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Chic Leather",
      price: 749
    },
    {
       id: 15,
      category: "Belts",
      description: "Signature belt from Gucci ",
      imgLink:
        "https://img.shopstyle-cdn.com/pim/c7/a6/c7a695a8db5a375b222f15bea045bdea_xlarge.jpg",
      name: "Raw Edge",
      price: 799
    },
    {
       id: 16,
      category: "Belts",
      description: "Iconic metallic belt",
      imgLink:
        "https://img.shopstyle-cdn.com/pim/81/78/8178fa6c3b27d3f3e0fe18d019c992ea_xlarge.jpg",
      name: "Goofy Black",
      price: 349
    },
    {
       id: 17,
      category: "Sunglasses",
      description: "Min black faded front shades",
      imgLink:
        "https://cdn.shopify.com/s/files/1/0898/5824/products/QUAY_HIGHKEY_Mini_BLACK_FADE_FRONT_450x.jpg",
      name: "Quay Shades",
      price: 479
    },
    {
       id: 18,
      category: "Belts",
      description: "Evergreen formal belt with classic buckle",
      imgLink:
        "https://as1.ftcdn.net/jpg/02/02/45/86/500_F_202458696_CYlcJbJfjgUb2VgQnPSUxHU79v6I3SC6.jpg",
      name: "Classic Brown",
      price: 128
    },
    {
       id: 19,
      category: "Handbags",
      description: "Beach handbag to go along with a beach holiday",
      imgLink:
        "https://images.pexels.com/photos/2305000/pexels-photo-2305000.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Funky Jute",
      price: 99
    }
  ];


  app.get('/product/:id', (req, res)=>{
    let id=+req.params.id;
    let product=productData.find(n=>n.id==id);
    console.log(id, product);

    if(product)res.send(product);
    else res.status(404).send('No Product found');
  })


  app.get('/products/:category', (req, res)=>{
    let category=req.params.category;
    let arr=productData;
    if(category=='All')res.send(arr);
    else if(category){arr=productData.filter(n=>n.category==category);
    res.send(arr);}
  })

  app.post('/products', (req, res)=>{
    let body=req.body;
    let maxId=productData.reduce((acc, curr)=>acc>curr.id?acc:curr.id, 0);
    body.id=maxId+1;
    console.log(body);
    productData.push(body);
    res.send(body);
  })

  app.put('/products/:id', (req, res)=>{
    let id=+req.params.id;
    let body=req.body;
    let index=productData.findIndex(pd=>pd.id==id);
    if(index>=0){
        body.id=id;
        productData[index]=body;
        res.send(body);
    }
    else res.status(404).send('No Product found');
  })

  app.delete('/products/:id', (req, res)=>{
    let id=+req.params.id;
    let index=productData.findIndex(pd=>pd.id==id);
    if(index>=0){
        let prod=productData.splice(index, 1);
        res.send(prod);
    }
  })

  // app.get('/orders', (req, res)=>{
  //   let user=req.headers.Cookie;
  //   // let user=req.body;
  //   console.log(user)
  //   let data=orderData.filter(n=>n.email==user.email);
  //   // console.log(data, req.body);
  //   res.send(data);
  // })
  
  app.get('/orders', (req, res)=>{
    let user=req.query.data;
    user=JSON.parse(user);
    // console.log(user);
        let data=orderData.filter(n=>n.email==user.email);
    // console.log(data, req.body);
    res.send(data);

  })

  // app.get('/orders', (req, res) => {
  //   let cookies = req.headers.cookie;
  //   console.log(cookies)
  //   let parsedCookies = cookie.parse(cookies);
  //   console.log(parsedCookies)
  //   let user = JSON.parse(parsedCookies.user);
  //   console.log(user);
  //   // ...
  // });

  app.post('/orders', (req, res)=>{
    let body=req.body;
    let maxId=orderData.reduce((acc, curr)=>acc>curr.id?acc:curr.id, 0);
    if(orderData.length==0) maxId=0;
    body.id=maxId+1;
    console.log(body);
    orderData.push(body);
    res.send(body);
  });

  app.post('/login', (req, res)=>{
    let body=req.body;
    let user=users.find(n=>n.email==body.email && n.password==body.password);
    if(user)res.send(user);
    else res.status(401).send('Not Found');
  })


  // app.post('/login', (req, res)=>{
  //   let {email, password}=req.body;
  //   let user=users.find(n=>n.email==email && n.password==password);
  //   console.log(user);
  //   if(!user) res.status(401).send('Login failed');
  //   else{
  //       res.cookie(
  //           'user',
  //           {email:user.email, password:user.password},
  //           {maxAge:3600000, signed:true}
  //       )
  //       res.send("Login Success");
  //       console.log(email);
  //       }
  //   })

// app.get('/logout', (req, res)=>{
//       res.clearCookie("user");
//       res.send('Cookies cleared');
//   });