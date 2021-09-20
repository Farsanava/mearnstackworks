//datastructures
//for organizing data
//arrays
//objects

//define?
// is it possible tostore same and diff types of objects/data
// size fixed or Not
//insertion order preserved or not
//fetching array elements
// array index started from 0th position


var expenses=[1000,2000,12000,40000,29000]

// console.log(expenses[1]);

// console.log(expenses.length);   //array_name.length

//iterating through array
// for(let i=0;i<expenses.lenghth;i++){
//     console.log(expenses[i]);
// }



// for(let amount of expenses){       ====>of is a operator
//     console.log(amount);
// }


var total=0;
var expenses=[1000,2000,12000,40000,29000]
for(var amount of expenses){
    total+=amount
}
console.log(total);