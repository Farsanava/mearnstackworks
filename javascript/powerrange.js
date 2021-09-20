//2+22=24
//3+33+333=369

var num=3;
var res=0; //res="  ";
var sum=0;
for(let i=1;i<=num;i++){
     res=res*10+num; //res+=num
     sum=sum+res;    //sum=sum+Number(res)

}
console.log(sum);
