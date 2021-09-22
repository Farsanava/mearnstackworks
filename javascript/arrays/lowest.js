var expenses = [12000, 13000, 14000, 15000, 11000, 25000, 17000]

let low_exp=expenses[0];
for(let amount of expenses){
    if(low_exp > amount){
        low_exp=amount;
    }
}
console.log(low_exp);

