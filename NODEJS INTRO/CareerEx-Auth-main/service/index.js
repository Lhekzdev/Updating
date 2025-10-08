const Auth = require("../models/authModel")

 

 const disPlayUsers =async(req,res)=>{

const findAllUsers= await Auth.find()
return findAllUsers

 }


 module.exports ={
    disPlayUsers
 }