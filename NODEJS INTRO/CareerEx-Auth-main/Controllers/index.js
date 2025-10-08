const Auth = require ("../models/authModel.js")
const { disPlayUsers } = require("../service/index.js")

const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


const handleRegistration = async (req, res)=>{
    

    
        
        const { email, password, firstName, lastName, state } = req.body

        if(!email){
            return res.status(400).json({message: "Please add your email"})
        }
    
        if(!password){
            return res.status(400).json({message: "Please enter password"})
        }
    
        const existingUser = await Auth.findOne({ email })
    
        if(existingUser){
            return res.status(400).json({message: "User account already exist"})
        }
    
        if(password.length < 6){
            return res.status(400).json({message: "Password should be a min of 6 chars"}) 
        }

        const hashedPassword = await bcrypt.hash(password, 12)
    
        const newUser = new Auth({ 
            email, 
            password: hashedPassword, 
            firstName, 
            lastName, 
            state 
        })
    
        await newUser.save()

        // Send user Email
    
        res.status(201).json({
            message: "User account created successfully",
            newUser: { email, firstName, lastName, state }
        })
    

  

}




// const handleLogin =


const findUser =async(req, res)=>  {  
   console.log(req.user);
   
   
    try {


const existingUser = await disPlayUsers()

return  res.status(200).json({
    message: "These are all registered Users",
    existingUser
})   




} catch (error) {
    res.json({message:error.message})
  } 
}

module.exports ={
// handleLogin,
findUser,
handleRegistration

}  

