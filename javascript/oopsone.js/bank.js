class Bank {
    createAccount(p_name, acno, ac_type, min_bal) {
        this.p_name = p_name,
            this.acno = acno,
            this.ac_type = ac_type,
            this.balance = min_bal
    }
    deposite(amount) {
        this.balance += amount
        console.log(`your acnt ${ this.acno } has been credited with amount ${ amount } aval balance ${this.balance}`);
    }
    withdrawal(amount) {
        if (this.balance > amount) {
            this.balance -= amount
            console.log(`your acnt ${this.acno} has been debited with amount ${amount} aval balance ${this.balance}`);
        }
        else {
            console.log("tansaction failed insufficient");
        }
    }
}
var obj=new Bank()
obj.createAccount("sanu",777,"savings",5000)
obj.withdrawal(10000);
obj.deposite(5000);
obj.withdrawal(4000)
obj.withdrawal(6000)