const mongoose = require("mongoose");
let mongoDBURL =
  "mongodb+srv://sandun:sandun@cluster0.xudiu.mongodb.net/mern-ecommerce";
  

mongoose.connect(mongoDBURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

let dbconnect = mongoose.connection;

dbconnect.on("error", () => {
  console.log("Mongo db connection failed");
});

dbconnect.on("connected", () => {
  console.log("mongo db connection succesful");
});

module.exports=mongoose  