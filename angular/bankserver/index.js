//import express
const express = require('express')
const dataService = require('./services/data.services')

const session = require('express-session')   // import session

const jwt=require('jsonwebtoken')
//import cors
const cors=require('cors')

//create app using express
const app = express()

//use cors
app.use(cors({
    origin:'http://localhost:4200',
    credentials:true
}))
//use session
app.use(session({
    secret: 'randomsecurestring',
    resave: false,
    saveUninitialized: false
}))

//parse JSON
app.use(express.json())

//application specific middleware

app.use((req, res, next) => {
    console.log("Application Specific Middleware");
    next()
})

// Router Specific middleware

// const logMiddleware = ((req, res, next) => {
//     console.log(req.session);
//     if (!req.session.currentAcno) {
//         res.json({
//             status: false,
//             statusCode: 401,
//             message: "Please Login"
//         })
//     }
//     else{
//         next()
//     }
// })

//jwt middleware
const jwtMiddleware=(req,res,next)=>{
    try{
        // const token=req.body.token
        const token=req.headers["x-access-token"]
        //token validation
        const data=jwt.verify(token,'supersecretkey123456')
        req.currentAcno=data.currentAcno
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
//token API for testing
app.post('/token',jwtMiddleware, (req, res) => {
    res.send("current Account No is:"+req.currentAcno)
})

// //define default router 
// app.get('/',(req,res)=>{
//     res.send("GET method")
// })

// set the status
app.get('/', (req, res) => {
    res.status(401).send("GET method")
})

app.post('/', (req, res) => {
    res.send("POST method")
})

app.delete('/', (req, res) => {
    res.send("delete method")
})

app.patch('/', (req, res) => {
    res.send("PATCH method")
})

app.put('/', (req, res) => {
    res.send("PUT method")
})

// register API
app.post('/register', (req, res) => {
    console.log(req.body);
    // const result = 
    dataService.register(req.body.accno, req.body.uname, req.body.password)
    .then(result=>{
        res.status(result.statusCode).send(result)
    })  
})

// login API
app.post('/login', (req, res) => {
    console.log(req.body);
    //req
    // const result = 
    dataService.login(req.body.acno, req.body.pass)
    .then(result=>{
    res.status(result.statusCode).send(result)
    })
})

//----deposit API-----
// logMiddleware,
app.post('/deposit', jwtMiddleware,(req, res) => {
    console.log(req.body);
    // req,
    // const result = 
    dataService.deposit( req.body.acno, req.body.pass, req.body.amt)
    .then(result=>{
        res.status(result.statusCode).send(result)
    })
   
})

//withdraw API
//logMiddleware
app.post('/withdraw',jwtMiddleware, (req, res) => {
    console.log(req.body);
    dataService.withdraw(req,req.body.acno, req.body.pass, req.body.amt)
    .then(result=>{
        res.status(result.statusCode).send(result)
     })
    })

//transaction API
// logMiddleware,
app.post('/transaction', jwtMiddleware, (req, res) => {
    console.log(req.body);
    dataService.getTransaction(req.body.acno)
    .then(result=>{
        res.status(result.statusCode).send(result)
    })
    
})

//deleteAcc API
app.delete('/deleteAcc/:acno',jwtMiddleware,(req,res)=>{
    dataService.deleteAcc(req.params.acno)
    .then(result=>{
        res.status(result.statusCode).send(result)
    })
})

//set port
app.listen(3000, () => {
    console.log("server started at port number 3000");
})