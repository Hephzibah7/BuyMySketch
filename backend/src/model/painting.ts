import mongoose from "mongoose";

const paintingSchema=new mongoose.Schema({
    userId:{type:String, required:true},
    name: {type:String, required:true},
    description: {type:String},
    category: {type:String, required:true},
    image: {type:String, required:true},
    likes:{type:Number, default:0}

})

const Painting=mongoose.model('Painting', paintingSchema);

export default Painting;