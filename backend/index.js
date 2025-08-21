const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const StuRoutes=require('./routes/stuRoute')
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// new topic start from here
//middleware  
//app level middleware
app.use((req, res, next) => {
  console.log("App level middleware running...");
  next(); // without next(), request will hang
});


app.get("/home", (req, res) => {
    console.log("welcome to home page");
    res.send("okk home");
});

app.get("/about",(req,res)=>{
  console.log("welcome to about page");
  res.send("okk about");
  
});

app.get("/contact",(req,res)=>{
  console.log("welcome to contact page");
  res.send("okk about");
  
});

//path level middleware or route level middleware
app.get("/about",(req,res,next)=>{
  console.log("this is path level about middleware");
  next();
  
},(req,res)=>{
  console.log("this is about page");
  res.send("about okk")
  
})


app.get("/contact",(req,res,next)=>{
  console.log("welcome to contact 1 middleware");
  next();
},(req,res,next)=>{
  console.log("welcome to contact2 middleware");
  res.send("okk contact");
  
},(req,res)=>{
  console.log("welcome to contact page");
  res.send("okk contact");
  
});
//end here







mongoose.connect(process.env.DbCON)
  .then(() => console.log(' Connected to MongoDB'))
  .catch(err => console.error(' MongoDB connection error:', err));



app.use('/students', StuRoutes);

const port = process.env.Port ||8000;
app.listen(port, () => {
  console.log(` Server is running on port ${port}`);
});





//create ,fire(emit),listen(on)
//new topic eventEmitter


//question1
// const EventEmiter=require("events");
// const event=new EventEmiter();//create

// event.on("doorbell",(nm)=>{
//   console.log("bahar kon hai??" + nm + "ruko abhi aarahi hon");//listen
  
// })

// event.emit("doorbell","anshika");//fire 
// ;

//question2
// const myevent=require("events")
// const event=new myevent();


// event.on("doorbell",(nm)=>{
//   if(nm==="raj"){
//    console.log("who is there?"+ nm +"I am coming");
//   }
  
  
// })

// event.emit("doorbell","raj");


// let fs=require("fs");
// let rs=fs.createReadStream("./demo.txt");

// rs.on("open",()=>{
//   console.log("your file is open");
  
// })

// rs.emit("open");