import mongoose from "mongoose";

const paintingSchema=new mongoose.Schema({
    userId:{type:String, required:true},
    name: {type:String, required:true},
    description: {type:String},
    category: {type:String, required:true},
    image: {type:String, required:true},

})

const Painting=mongoose.model('Painting', paintingSchema);

export default Painting;