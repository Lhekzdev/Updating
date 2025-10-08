
require("dotenv").config(); 
const express = require("express")
const mongoose = require("mongoose")
// const dotenv = require("dotenv")
// dotenv.config()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


const Auth = require("./models/authModel")
const  {handleLogin, findUser, handleRegistration}  = require ("./Controllers/index")
const { validateRegister, Authorization } = require("./middlewares")



const app = express()

app.use(express.json())

const PORT = process.env.PORT || 8000

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("Mongodb connected...")

    app.listen(PORT, ()=>{
        console.log(`Server started running on Port ${PORT}`)
    }) 
})



app.post("/sign-up", validateRegister ,handleRegistration)
// app.post("/login", handleLogin)

app.patch("/reset-password", Authorization, async(req,res)=>{
    
const {password} = req.body

const user = await Auth.findOne({email:req.user.email})
if(!user){
    return res.status(201).json({
            message: "User account created successfully"
})}

const hashedPassword = bcrypt.hash(password, 12)
console.log(user);
user.password =hashedPassword
await user.save()

})



app.post("/login", async(req, res)=>{


    const { email, password } = req.body

    const user = await Auth.findOne({ email })
    // .select("-password")

    if(!user){
        return res.status(404).json({message: "User account does not exist."})
    }

    const isMatch = await bcrypt.compare(password, user?.password)

    if(!isMatch){
        return res.status(400).json({message: "Incorrect email or password."})
    }

    // if(!user.verified){

    // }


    // Generate a token
    const myAccessToken = jwt.sign(
        {id: user?._id },
        process.env.accessToken,
        {expiresIn: "5h"}
    )

    const myRefreshToken = jwt.sign(
        {id: user?._id},
        process.env.refreshToken,
        {expiresIn: "30d"}
    )


    res.status(200).json({
        message: "Login successful",
        myAccessToken ,
        user: {
            email: user?.email,
            firstName: user?.firstName,
            lastName: user?.lastName,
            state: user?.state
        },
       myRefreshToken
    })

})
app.get("/display-users",Authorization, findUser)




// models, views, controlleers, routes
// Middlewares Authorization validations 