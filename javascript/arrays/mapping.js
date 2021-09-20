var  arr=[2,3,4,5,6,7,8]   //op [1,2,3,7,8,9]
//if num < 5 mapp into num-1 else num>5 map num+1
var op=[]
for(let number of arr){
    // if(number< 5){
    //     op.push(number-1);
    // }
    // else if(number >5){
    //     op.push(number+1);
    // }
    // else{
    //     op.push(number)
    // }
    number<5?op.push(number-1):number>5?op.push(number+1):op.push(number)

}
console.log(op);