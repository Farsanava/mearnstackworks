//------sybtax arror--------

// var exp="%10+2+3-1"  (doubtful code)

// console.log(eval(exp));

// console.log("error occured");

// console.log("data commit");

//-------using try block---------

// var exp="%10+2+3-1"  //(doubtful code)
// try{
// console.log(eval(exp));   //doubtful code
// }
// catch(error){
// console.log("error occured");   //handling that doubtful code
// }
// console.log("data commit");

//------eg 2-----

// var age=17
// try{
//     if(age<18){
//         throw new Error("invalid age")
//     }
//     else{
//         console.log(age);
//     }
// }
// catch(error){
//     console.log(error);
// }


// var num="1234567890"
// try{
//     if(num.length!=10){
//               throw new Error("invalid number")
//   }
//   else{
//            console.log(num);
//   }
// }
// catch(error){
//            console.log(error);
// }


//------validate account number-----

// var accnum="hello"
// try{
//     if(isNaN(accnum)){
        
//         throw new Error("invalid account nmber")  //create our new error
//     }
//     else{
//         console.log("valid");
        
//     }
// }
// catch(error){
//     console.log(error);
// }


var accnum="hello"
try{
    if(isNaN(accnum)){
        
        throw new Error("invalid account nmber")  //create our new error
    }
    else{
        console.log("valid");
        
    }
}
catch(error){
    console.log(eval("%2+3-9"));
}
finally{
    console.log("db committ");
}