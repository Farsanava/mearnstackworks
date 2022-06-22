//1**3=1      o/p
//2**3=8       2
//3**3=27      3
//-------
var num=3,low=27,upp=64;
for(let i=1;i<=upp;i++){
     let res=i**num;
     if ((res>=low)&(res<=upp)) {
         console.log(i);
     }
}
