//6 not(1,2,3,6)
//7 yes(1,7)
//11 yes(1,11)
// 21 No(1,3,7,21)


var num=25;
var flag=0;
for (let i=2;i<num;i++){
    // if (num%i==0) {
    //     console.log("not prime");
    //     break;
    // }
    // else{
    //     console.log("prime");
    //     break;
    // }
    if(num%i==0)
    {
        flag+=1;
        break;
    }
    
}
console.log(flag==0?"prime":"not prime");
 if(num==1){
    console.log("not prime");
}