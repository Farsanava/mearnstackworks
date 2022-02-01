const express=require('express')
const dataService=require('./services/data.services')
const jwt=require('jsonwebtoken')
const cors=require('cors')

const app=express()

// app.listen(3000)
app.use(cors({
    origin:'http://localhost:4200',
    credentials:true
}))

app.use(express.json())

const jwtMiddleware=(req,res,next)=>{
    try{
        // const token=req.body.token
        const token=req.headers["x-access-token"]
        //token validation
        const data=jwt.verify(token,'supersecretkey123456')
        req.currentUserid=data.currentUserid
        next()
    }
    catch{
        res.json({
            status: false,
            statusCode: 401,
            message: "Please Login"

        })
    }
}

app.post('/register', (req, res) => {
    console.log(req.body);
    // const result = 
    dataService.register(req.body.uname,req.body.uid, req.body.password)
    .then(result=>{
        res.status(result.statusCode).send(result)
    })  
})

app.post('/login', (req, res) => {
    console.log(req.body);
    dataService.login(req.body.uid, req.body.pass)
    .then(result=>{
    res.status(result.statusCode).send(result)
    })
})

app.post('/addevent', jwtMiddleware,(req,res) => {
    console.log(req.body);
    dataService.addevent( req,req.body.uid,req.body.date,req.body.event)
    .then(result=>{
        res.status(result.statusCode).send(result)
    })
   
})

app.post('/viewevent', jwtMiddleware, (req, res) => {
    console.log(req.body);
    dataService.getEvent(req.body.uid)
    .then(result=>{
        res.status(result.statusCode).send(result)
    })   
})

app.delete('/deleteAcc/:uid',jwtMiddleware,(req,res)=>{
    dataService.deleteAcc(req.params.uid)
    .then(result=>{
        res.status(result.statusCode).send(result)
    })
})

// app.deleteEvent('/deleteAcc/:event',jwtMiddleware,(req,res)=>{
//     dataService.deleteEvent(req.params.event)
//     .then(result=>{
//         res.status(result.statusCode).send(result)
//     })
// })

app.listen(3000, () => {
    console.log("server started at port number 3000");
})
