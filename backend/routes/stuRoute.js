const express= require("express");
const route=express.Router();
const StuController=require("../controllers/stuControllers");

route.post("/save",StuController.stuSave);
route.get("/display", StuController.stuDisplay);
route.get("/updateshow",StuController.stuUpdateshow);
route.delete("/delete/:id",StuController.deleteData);

route.get("/datashow", StuController.dataShow)
route.post("/editSave",StuController.editSave)
route.post("/search",StuController.searchData)

module.exports=route;