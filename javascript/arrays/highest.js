
var expenses = [12000, 13000, 14000, 15000, 11000, 25000, 17000]

let high_exp=expenses[0];
for(let amount of expenses){
    if(high_exp < amount){
        high_exp=amount;
    }
}
console.log(high_exp);
