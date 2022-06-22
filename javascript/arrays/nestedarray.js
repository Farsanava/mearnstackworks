//nested array
var accounts=[
//    0     1    2        3
    [1000,"ram",15000,"savings"],
    [1001,"ravi",25000,"savings"],
    [1002,"akhil",30000,"current"],
    [1003,"nikil",35000,"current"]

]
//------print ac_name
  
// var ac_name=accounts.map(names=>names[1])
// console.log(ac_name);

// for(let account of accounts){
// console.log(account[1]);
// }

//-------print names with savings

// for(let account of accounts){
//     if(account[3]=="savings"){
//     console.log(account[1]);
//     }
// }

// var savings_name=accounts.filter(na=>na[3]=="savings").map(names=>names[1])
//  console.log(savings_name);


//-----print names whose balance>20000

// for(let account of accounts){
//         if(account[2]>20000){
//         console.log(account[1]);
//         }
//     }
 
 var balance_name=accounts.filter(na=>na[2]<20000).map(names=>names[1])
  console.log(balance_name);