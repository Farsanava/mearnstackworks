//import mongoose 
const mongoose=require('mongoose')

//connect server and mongoDB
mongoose.connect('mongodb://localhost:27017/bank',{
    useNewUrlParser:true
})

//model creation 
const User=mongoose.model('User',{
    accno: Number,
     uname:String, 
     password: String, 
     balance: Number, 
     transaction: []
})

//export Model
module.exports={
    User
}