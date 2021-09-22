var expenses=[12000,13000,14000,15000,11000,25000,17000]
var sum=0;
var n=expenses.length;
for(var amount of expenses){
    sum+=amount;
    var avg=sum/n;
}
console.log(avg);   //console.log(sum/expenses.length)