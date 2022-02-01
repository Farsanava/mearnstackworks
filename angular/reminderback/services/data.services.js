const jwt = require('jsonwebtoken')
const db = require('./db')

database = {
    1000: {  uname: "sanu",uid: 1000, password: 1000, event:[]},
    1001: {  uname: "shabi",uid: 1001,password: 1001,  event:[]},
    1002: {  uname: "nichu",uid: 1002, password: 1002 ,event:[]},
    1003: {  uname: "hadiashir",uid: 1003, password: 1003,  event:[]}
  }
  const register = ( uname,uid,password) => {
    // let database=this.data
    return db.User.findOne({ uid })
      .then(user => {
        console.log(user);
        if (user) {
          return {
            status: false,
            statusCode: 401,
            message: "Account alredy Exist...Please Login!!"
          }
        }
        else {
          const newUser = new db.User({
            uname,
            uid,
            password,
            event:[]
          })
          newUser.save()
          return {
            status: true,
            statusCode: 200,
            message: "Account Successfully Created!!"
          }
        }
      })
  }
  const login = (uid, pass) => {
    return db.User.findOne({uid, password:pass})
    .then(user => {
      if (user) {
        currentUsername = user.uname
        const token = jwt.sign({
          currentUserid: uid
        }, 'supersecretkey123456')
        return {
          status: true,
          statusCode: 200,
          message: "Login Successful!!",
          currentUsername: currentUsername,
          currentUserid: uid,
          token
        }
      }
      else {
        return {
          status: false,
          statusCode: 401,
          message: "Invalid Password or Username"
        }
      }
    })
  }
  const addevent= (req,uid,date,event) => {

    return db.User.findOne({
      uid
    }).then(user => {
      if(req.currentUserid != uid){
        return {
          status: false,
          statusCode: 401,
          message: "Option Denied"
        }
      }
      if (!user) {
        return {
          status: false,
          statusCode: 401,
          message: "Invalid User id"
        }
      }
      user.event.push({
        date:date,
        event:event
      })
      user.save()
      return {
        status: true,
        statusCode: 200,
        message: "Event is added"
      }
    })
  }
  const getEvent = (uid) => {

    return db.User.findOne({ uid })
      .then(user => {
        console.log(user);
        if (!user) {
          return {
            status: false,
            statusCode: 401,
            message: "User not Found"
          }
        }
        return {
          status: true,
          statusCode: 200,
          event:user.event
        }
      })
  }
  const deleteAcc=(uid)=>{
    return db.User.deleteOne({
      uid
    }).then(user=>{
      if (!user) {
        return {
          status: false,
          statusCode: 401,
          message: "User deasnot exist"
        }
      }
      return {
        status: true,
        statusCode: 200,
        message: "Account Number "+uid+" deleted Successfully"
      }
    })
  }
  // const deleteEvent=(event)=>{
  //   return db.User.deleteOne({
  //     event
  //   }).then(user=>{
  //     if (!user) {
  //       return {
  //         status: false,
  //         statusCode: 401,
  //         message: "Event deasnot exist"
  //       }
  //     }
  //     return {
  //       status: true,
  //       statusCode: 200,
  //       message: "Event "+event+ " deleted Successfully"
  //     }
  //   })
  // }
  module.exports = {
    register,
    login,
    addevent,
    getEvent,
    deleteAcc,
    
  }