
const stuModel = require("../models/stuModel")


const stuSave = async (req, res) => {
    const { rollno, name, city, fees } = req.body; // match frontend keys
    const student = await stuModel.create({
        rollno,
        name,
        city,
        fees
    });
    res.send("data saved!!!");


}

const stuDisplay=async(req,res)=>{
    const student=await stuModel.find();
    res.send(student);
}
const stuUpdateshow=async(req,res)=>{
    const student =await stuModel.find();
    res.send(student);
}

const deleteData = async (req, res) => {
  const { id } = req.params;
  await stuModel.findByIdAndDelete(id);
  res.send("<h1>Data Successfully Deleted</h1>  ");
};

const dataShow = async (req, res) => {
  const { id } = req.query;
  const Student = await stuModel.findById(id);
  console.log(Student);
  
  res.send(Student);
};


const editSave = async (req, res) => {
  const { id } = req.query;
  const {rollno,name,city,fees}=req.body;
  const Student = await stuModel.findByIdAndUpdate(id, {
    rollno:rollno,
    name:name,
    city:city,
    fees:fees
  });
  res.send(Student);
};

// const searchData = async (req, res) => {
//   const { rollno } = req.body;
//   const Student = await stuModel.find({ rollno: Number(rollno) });
//   console.log(rollno);
//   res.send(Student);
// };

const searchData = async (req, res) => {
  const { rollno } = req.body; 
  const Student = await stuModel.find({ rollno: rollno }); 
  console.log(rollno); 
  res.send(Student);
};
  


const home=(req,res)=>{
  res.send("okk");
}









module.exports = {
    stuSave,
    stuDisplay,
    stuUpdateshow,
    deleteData,
   dataShow,
    editSave,
    searchData,
    home
};


// const searchData = async (req, res) => {
//   const { rollno } = req.body;
//   console.log("Searching for:", rollno);

//   const Student = await stuModel.find({ rollno: Number(rollno) });  // ✅ convert to Number
//   console.log("Result:", Student);

//   res.send(Student);
// };
