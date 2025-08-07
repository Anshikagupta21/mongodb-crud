const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const StuRoutes=require('./routes/stuRoute')
const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect('mongodb+srv://anshikagupta663:kuWg9ug8fgLsL8u1@cluster0.i5reaqb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log(' Connected to MongoDB'))
  .catch(err => console.error(' MongoDB connection error:', err));



app.use('/students', StuRoutes);

const port = 8000;
app.listen(port, () => {
  console.log(` Server is running on port "http://localhost:8000"`);
});