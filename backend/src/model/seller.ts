import mongoose from "mongoose";

const sellerSchema=new mongoose.Schema({
    userId:{type:String, required:true},
    description:{type:String},
    theme:{type:String},
    No_of_Order:{
        type:Number,
      default:0
},
    No_of_Paintings:{
        type:Number,
      default:0
},
    Highest_Rate_Painting_Sold:{
        type:Number,
      default:0
},
    No_of_currentOrders:{
        type:Number,
      default:0
},
    Rating:{
        type:Number,
      default:0
},
    phone_number:{type:String},
    Country:{type:String},
    Address:{type:String},
    Badge:{
        type:String,
      default:"Newbie"
},
})

const Seller=mongoose.model('Seller', sellerSchema);
export default Seller;