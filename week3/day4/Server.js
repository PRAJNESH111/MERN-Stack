// // console.log("hellow world");
// const express = require("express");
// // const { default: mongoose } = require("mongoose");
// const mongoose = require("mongoose");
// const app = express();
// const routes = require("./Routes/Route")

// app.use(express.json());
// app.use("/",routes)


// //db connection
// mongoose.connect(
//     "mongodb+srv://Prajnesh:Prajnesh%402001@cluster1.ejuzfcu.mongodb.net/"
// ).then(()=>{
//     console.log("data base is connected succesfully");
// })
// .catch((err) => {
//     console.log(err,"something went wrong");
// });


// //test api
// app.get("/test",(req,res)=>{
//     res.send("hellow everyone ,thise is test Api");
// });
// app.listen(5000,()=>{
//     console.log("server is running in port 5000");
// });

//server js

// console.log("Hello Enpveryone");
const express =require("express")
const mongoose=require("mongoose")
const routes=require("./Route/route");
const app=express()
app.use(express.json())

app.use("/",routes);
//Db connection
mongoose.connect(
"mongodb+srv://Prajnesh:Prajnesh%402001@cluster1.ejuzfcu.mongodb.net/"
).then(() =>{
    console.log("Database is connected sucessfully")
})
.catch((err)=>{
    console.log(err,"Something went Wrong");
});
//Test API
app.get("/test",(req,res)=>{
    res.send("Hello Everyone This is Test API")
});
app.listen(5000,()=>{
    console.log("Sever is running on Port 5000");
});