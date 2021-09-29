var arr=[2,3,4,5,6,7]

//print all odd numbers

// var isOdd=arr.filter(num=>num%2!=0)
// console.log(isOdd);

//print squares of all even numbers

// var even_squares=arr.filter(num=>num%2==0).map(num=>num**2)
// console.log(even_squares);

// //sorting
// //sort,reduce no of parameters inside arrow fn is 2

// arr.sort(num1,num2=>num1-num2)

//------reduce method------

var total=arr.reduce((num1,num2)=>num1+num2)
console.log(total);

var max=arr.reduce((num1,num2)=>num1>num2?num1:num2)
console.log(max);

var min=arr.reduce((num1,num2)=>num1<num2?num1:num2)
console.log(min);