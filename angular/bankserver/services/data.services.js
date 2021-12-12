//import jwt
const jwt=require('jsonwebtoken')

database = {
  1000: { accno: 1000, uname: "sanu", password: 1000, balance: 5000, transaction: [] },
  1001: { accno: 1001, uname: "shabi", password: 1001, balance: 6000, transaction: [] },
  1002: { accno: 1002, uname: "nichu", password: 1002, balance: 4000, transaction: [] },
  1003: { accno: 1003, uname: "hadiashir", password: 1003, balance: 5000, transaction: [] }
}

const register = (accno, uname, password) => {
  // let database=this.data

  if (accno in database) {
    return {
      status: false,
      statusCode: 401,
      message: "Account alredy Exist...Please Login!!"
    }
  }
  else {
    database[accno] = {
      accno,
      uname,
      password,
      balance: 0,
      transaction: []

    }
    //  this.saveDetails()
    return {
      status: true,
      statusCode: 200,
      message: "Account Successfully Created!!"
    }
  }
}
// req
const login = ( acno, pass) => {

  if (acno in database) {
    if (pass == database[acno]["password"]) {
      currentUsername = database[acno]["uname"]
      //store acno in session
      // req.session.currentAcno = acno

      //token Generation
      const token=jwt.sign({
        currentAcno : acno
      },'supersecretkey123456')

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
        message: "Invalid Password!!"
      }
    }
  }
  else {

    return {
      status: false,
      statusCode: 401,
      message: "Invalid Account Number!!"
    }
  }
}

const deposit = ( acno, pass, amt) => {
  var amount = parseInt(amt)   // passed with int (avoid concatenation)

  // if (!req.session.currentAcno) {
  //   return {
  //     status: false,
  //     statusCode: 401,
  //     message: "Please Login"
  //   }
  // }
  
    if (acno in database) {

      if (pass == database[acno]["password"]) {
        database[acno]["balance"] = database[acno]["balance"] + amount
        database[acno]["transaction"].push({
          amount: amount,
          type: "CREDIT"
        })

        return {
          status: true,
          statusCode: 200,
          message: amount + " deposited. New balance is:" + database[acno]["balance"]
        }

      }
      else {

        return {
          status: false,
          statusCode: 401,
          message: "Invalid Password!!"
        }
      }
    }
    else {

      return {
        status: false,
        statusCode: 401,
        message: "User not Found"
      }
    }
  
}
const withdraw = (acno, pass, amt) => {
  var amount = parseInt(amt)   // passed with int (avoid concatenation)

  if (acno in database) {

    if (pass == database[acno]["password"]) {
      if (database[acno]["balance"] > amount) {
        database[acno]["balance"] = database[acno]["balance"] - amount
        database[acno]["transaction"].push({
          amount: amount,
          type: "DEBIT"
        })
        //  console.log(database[acno]["transaction"])
        //   this.saveDetails()
        return {
          status: true,
          statusCode: 200,
          message: amount + " credited. New balance is:" + database[acno]["balance"]
        }
      }
      else {

        return {
          status: false,
          statusCode: 401,
          message: "insufficient Balance!!"
        }
      }
    }
    else {

      return {
        status: false,
        statusCode: 401,
        message: "Invalid Password!!"
      }
    }
  }
  else {

    return {
      status: false,
      statusCode: 401,
      message: "User not Found"
    }
  }
}
const getTransaction = (acno) => {
  if (acno in database) {
    return {
      status: true,
      statusCode: 200,
      transaction: database[acno]["transaction"]
    }
  }
  else {
    return {
      status: false,
      statusCode: 401,
      message: "User not Found"
    }
  }
}
// for use the datas
module.exports = {
  register,
  login,
  deposit,
  withdraw,
  getTransaction
}