const mongoose= require('mongoose');


const orderSchema = mongoose.Schema({
    userId: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    orderItems: [
      {
        name: { type: String, require: true },
        quantity: { type: Number, require: true },
        _id: { type: String, require: true },
        price: { type: Number, require: true },
      }
    ],
    shipppingAddress : {
  
        address : { type:String , require: true },
        city : { type:String , require: true},
        postalCode : { type:Number , require: true},
        country : { type:String , require: true}
  
    },
    orderAmount : { type:Number , require:true},
    transactionId : { type:String , require:true},
    isDelivered : { type:Boolean , require:true}
  
  },{timestamps : true });

const orderModel=mongoose.model('orders',orderSchema);
module.exports = orderModel;