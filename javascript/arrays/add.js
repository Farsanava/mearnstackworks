var arr=[2,4,6,3]    //out   13,11,9,12  (15-2)(15-4)(15-6)(15-3)

let total=0;

for(let num of arr){
      total+=num;
}
var op=[];
for (let num of arr){
    let res=total-num;
    op.push(res)
}
console.log(op);
    

