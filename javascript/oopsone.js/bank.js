//authenticate
//fundTransfer()
//balanceEnquiry()

class Bank {
    session = {}  //created for storing accout number  of authenticated account (if login success)
    accounts = {
        1001: {
            acno: 1001, password: "userone", balance: 5000, transactions:
                [
                    { to: 1002, amount: 500 },
                    { to: 1003, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        },
        1002: {
            acno: 1002, password: "usertwo", balance: 7000,
            transactions:
                [
                    { to: 1001, amount: 500 },
                    { to: 1003, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        },
        1003: {
            acno: 1003, password: "userthree", balance: 8000,
            transactions:
                [
                    { to: 1001, amount: 500 },
                    { to: 1002, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        },
        1004: {
            acno: 1001, password: "userone", balance: 9000,
            transactions:
                [
                    { to: 1001, amount: 500 },
                    { to: 1003, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        },

    }

    getAccountdetails() {
        return this.accounts
    }
    validateAccountNumber(accno) {
        return accno in this.accounts ? true : false
    }
    authenticate(accno, password) {
        //validate account number
        if (this.validateAccountNumber(accno)) {
            let pwd = this.accounts[accno].password
            if (pwd == password) {
                this.session["user"] = accno

                return 1
                //login success
            }
            else {
                return -1
                //invalid password
            }
            //  return pwd==password?1:0
        }
        else {
            return 0
            // -1 for invalid account number
        }
    }

    balanceEnquiry() {

        let user = this.session["user"]
        return this.accounts[user].balance

    }
    fundTransfer(to_accno, amount) {
        //chk to_accno vaalid or not
        if (this.validateAccountNumber(to_accno)) {
            let user = this.session["user"];
            let bal = this.balanceEnquiry()
            //  this.session["cred"]=to_accno;
            //  this.session["amo"]=amount;
            if (bal > amount) {
                this.accounts[user].balance -= amount
                this.accounts[to_accno].balance += amount
                this.accounts[user].transactions.push({ to: to_accno, amount: amount })
                console.log(this.accounts[user]);
            }
            else {
                console.log("failed insufficient balance");
            }

        }
        else {
            console.log("invalid account number");
        }

    }
    paymentHistory() {
        let user = this.session["user"]
        console.log(this.accounts[user].transactions);
    }
    getTransaction(){
        
        let transaction_history=[];;;
        for(let account in this.accounts){
            transaction_history.push(this.accounts[account].transactions)
        }
        return transaction_history
    }
    creditTransaction(){
       let transactions=this.getTransaction()
       for(let trans of transactions){
           for(let tran of trans){
               if(tran.to==this.session["user"]){
                   console.log(tran);
               }
           }
       }

    }
}
var obj = new Bank()
// console.log(obj.getAccountdetails());
var user = obj.authenticate(1002, "usertwo")
console.log(user == 1 ? "login success" : user == 0 ? "invalid account number" : "invalid password");
//login chythittulla aalde venm balance enquiry nadathan
console.log(obj.balanceEnquiry()); //ithil nammk accno pass chyynda aavashym illa
obj.fundTransfer(1001, 5000);
obj.paymentHistory();
obj.creditTransaction();
