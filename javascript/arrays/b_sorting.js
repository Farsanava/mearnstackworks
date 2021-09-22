var arr=[10,11,13,14,12]
//push()
//pop()
//=>asce
arr.sort((num1,num2)=>num1-num2)  //ascending
console.log("ascending order:",arr);
arr.sort((num1,num2)=>num2-num1)        //descending
console.log("descending order:",arr);



// definition of above statement 
// function sort(obj1,obj2){
//     if(obj1<obj2){
//         return -1(obj1)
//     }
//     else{
//         return 1(obj2)
//     }
//     obj1<obj2?-1:1
// }