//import mongoose 
const mongoose=require('mongoose')

//connect server and mongoDB
mongoose.connect('mongodb://localhost:27017/reminder',{
    useNewUrlParser:true
})

//model creation 
const User=mongoose.model('User',{
     uname:String,
     uid:Number, 
     password:String, 
     event:[]
})

//export Model
module.exports={
    User
}