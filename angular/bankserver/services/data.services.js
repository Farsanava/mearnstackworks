//import jwt
const jwt = require('jsonwebtoken')

const db = require('./db')

database = {
  1000: { accno: 1000, uname: "sanu", password: 1000, balance: 5000, transaction: [] },
  1001: { accno: 1001, uname: "shabi", password: 1001, balance: 6000, transaction: [] },
  1002: { accno: 1002, uname: "nichu", password: 1002, balance: 4000, transaction: [] },
  1003: { accno: 1003, uname: "hadiashir", password: 1003, balance: 5000, transaction: [] }
}

const register = (accno, uname, password) => {
  // let database=this.data

  return db.User.findOne({ accno })
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
          accno,
          uname,
          password,
          balance: 0,
          transaction: []
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
//   if (accno in database) {
//     return {
//       status: false,
//       statusCode: 401,
//       message: "Account alredy Exist...Please Login!!"
//     }
//   }
//   else {
//     database[accno] = {
//       accno,
//       uname,
//       password,
//       balance: 0,
//       transaction: []

//     }
//     //  this.saveDetails()
//     return {
//       status: true,
//       statusCode: 200,
//       message: "Account Successfully Created!!"
//     }
//   }
// }
// req
const login = (acno, pass) => {
  return db.User.findOne({accno:acno, password:pass})
  .then(user => {
    if (user) {
      currentUsername = user.uname
      const token = jwt.sign({
        currentAcno: acno
      }, 'supersecretkey123456')
      return {
        status: true,
        statusCode: 200,
        message: "Login Successful!!",
        currentUsername: currentUsername,
        currentAcno: acno,
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
//   if (acno in database) {
//     if (pass == database[acno]["password"]) {
//       currentUsername = database[acno]["uname"]
//       //store acno in session
//       // req.session.currentAcno = acno

//       //token Generation
//       const token = jwt.sign({
//         currentAcno: acno
//       }, 'supersecretkey123456')

//       return {
//         status: true,
//         statusCode: 200,
//         message: "Login Successful!!",
//         currentUsername: currentUsername,
//         currentAcno: acno,
//         token
//       }
//     }
//     else {

//       return {
//         status: false,
//         statusCode: 401,
//         message: "Invalid Password!!"
//       }
//     }
//   }
//   else {

//     return {
//       status: false,
//       statusCode: 401,
//       message: "Invalid Account Number!!"
//     }
//   }
// }


// passed with int (avoid concatenation)

// if (!req.session.currentAcno) {
//   return {
//     status: false,
//     statusCode: 401,
//     message: "Please Login"
//   }
// }
const deposit = (acno, pass, amt) => {
  var amount = parseInt(amt) // passed with int (avoid concatenation)
  return db.User.findOne({
    accno: acno,
    password: pass
  }).then(user => {
    if (!user) {
      return {
        status: false,
        statusCode: 401,
        message: "Invalid Password or Username"
      }
    }
    user.balance += amount
    user.transaction.push({
      amount: amount,
      type: "CREDIT"
    })
    user.save()
    return {
      status: true,
      statusCode: 200,
      message: amount + " credited. New balance is:" + user.balance
    }
  })
}
//   if (acno in database) {

//     if (pass == database[acno]["password"]) {
//       database[acno]["balance"] = database[acno]["balance"] + amount
//       database[acno]["transaction"].push({
//         amount: amount,
//         type: "CREDIT"
//       })

//       return {
//         status: true,
//         statusCode: 200,
//         message: amount + " deposited. New balance is:" + database[acno]["balance"]
//       }

//     }
//     else {

//       return {
//         status: false,
//         statusCode: 401,
//         message: "Invalid Password!!"
//       }
//     }
//   }
//   else {

//     return {
//       status: false,
//       statusCode: 401,
//       message: "User not Found"
//     }
//   }

// }
const withdraw = (req,acno, pass, amt) => {
  var amount = parseInt(amt)   // passed with int (avoid concatenation)
  return db.User.findOne({
    accno: acno,
    password: pass
  }).then(user => {
    if(req.currentAcno != acno){
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
        message: "Invalid Password or Username"
      }
    }
    if (user.balance < amount) {
      return {
        status: false,
        statusCode: 401,
        message: "insufficient Balance!!"
      }
    }

    user.balance -= amount
    console.log(user.balance);
    user.transaction.push({
      amount: amount,
      type: "DEBIT"
    })
    user.save()
    return {
      status: true,
      statusCode: 200,
      message: amount + " debited. New balance is:" + user.balance
    }
  })
}
//   if (acno in database) {

//     if (pass == database[acno]["password"]) {
//       if (database[acno]["balance"] > amount) {
//         database[acno]["balance"] = database[acno]["balance"] - amount
//         database[acno]["transaction"].push({
//           amount: amount,
//           type: "DEBIT"
//         })
//         //  console.log(database[acno]["transaction"])
//         //   this.saveDetails()
//         return {
//           status: true,
//           statusCode: 200,
//           message: amount + " debited. New balance is:" + database[acno]["balance"]
//         }
//       }
//       else {

//         return {
//           status: false,
//           statusCode: 401,
//           message: "insufficient Balance!!"
//         }
//       }
//     }
//     else {

//       return {
//         status: false,
//         statusCode: 401,
//         message: "Invalid Password!!"
//       }
//     }
//   }
//   else {

//     return {
//       status: false,
//       statusCode: 401,
//       message: "User not Found"
//     }
//   }
// }
const getTransaction = (acno) => {

  return db.User.findOne({ accno: acno })
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
        transaction: user.transaction
      }
    })
}
//   if (acno in database) {
//     return {
//       status: true,
//       statusCode: 200,
//       transaction: database[acno]["transaction"]
//     }
//   }
//   else {
//     return {
//       status: false,
//       statusCode: 401,
//       message: "User not Found"
//     }
//   }
// }

//deleteAcc
const deleteAcc=(acno)=>{
  return db.User.deleteOne({
    accno:acno
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
      message: "Account Number "+acno+" deleted Successfully"
    }
  })
}


// for use the datas
module.exports = {
  register,
  login,
  deposit,
  withdraw,
  getTransaction,
  deleteAcc
}