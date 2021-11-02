
const mongoose = require("mongoose");
const connectdb = async () =>
  mongoose.connect("mongodb+srv://aman:aman123@cluster0.59tcm.mongodb.net/portfolio?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }).then(()=>{
      console.log("Connection Successfull");
  }).catch((error)=>{
      console.log(error);
  })
module.exports = connectdb;