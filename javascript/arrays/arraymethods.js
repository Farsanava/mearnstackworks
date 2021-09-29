var arr=[2,3,4,5,6]

//------squares of each number in the array

// for(let num of arr){
//     console.log(num**2);
// }

var square=(num)=>num**2
var squares=arr.map(square);
console.log(squares);

//simple way
var squares=arr.map((num)=>num**2)
console.log(squares);

//------filters-------

//print even numbers from array

var isEven=num=>num%2==0

var evens=arr.filter(isEven)
console.log(evens);

//print all numbers>3

var nums=arr.filter(num=>num>3)
console.log(nums);




