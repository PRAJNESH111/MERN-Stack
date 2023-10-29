//coursemodel
const mongoose=require("mongoose")

const courseSchema=new mongoose.Schema({
    Course1:{
        type:String,
        required:true,
    },
    Course2:{
        type:String,
        required:true,
        // Unique:true,
    },
    Course3:{
        type:String,
        required:true
    },
    Course4:{
        type:String,
        required:true,
        // Unique:true,
    },
    Course5:{
        type:String,
        required:true,
        // Unique:true,
    },
    Course6:{
        type:String,
        required:true,
    },
},{timestamps:true}
);

module.exports=new mongoose.model("Course",courseSchema);