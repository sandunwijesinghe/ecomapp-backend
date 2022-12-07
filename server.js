const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path= require('path');

let dbconnection = require("./db");
let productsRoute = require("./routes/productRoutes");
let userRoute = require("./routes/userRoute")
let orderRoute = require("./routes/orderRoute");


app.use(bodyParser.json());
app.use("/api/products/", productsRoute);
app.use('/api/users/', userRoute)
app.use('/api/orders/', orderRoute);  


  if(process.env.NODE_ENV === 'production'){

    app.use('/',express.static('client/build'));

    app.get('*',(req,res)=>{
      res.send(path.resolve(__dirname, 'client/build/index.html'));
    })

  }


const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`server stareted on ${port}`);
});

//Run app, then load http://localhost:port in a browser to see the output.
