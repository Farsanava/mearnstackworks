function add(num1,num2){
    return num1 +num2    
}

//anonumous function nameless

var add=(num1,num2)=>{
    return num1+num2;
}
console.log(add(12,13));


//|
//|
//-
var add=(num1,num2)=>num1+num2
console.log(add(10,20));

//eg 2
var square=(num1)=>num1**2


var cube=(num1)=>num1**3

var div=(num1,num2)=>num1/num2

var name="arun"
// function isStartWithA{
//    return  name[0]=="a"?true:false
// }

var isStartWithA=(name)=>name[0]=="a"?true:false

var isEven=(num)=>num%2==0?true:false

var sub=(num1,num2)=>num1>num2?num1-num2:num2-num1

var LargestAmongTwo=(num1,num2)=>num1>num2?num1:num2
