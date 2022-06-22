// 153=153
var num=407;
var number=num;
var res=0;
while(num>0)
{
   var dig=num%10;
   res=res+(dig**3);
   num=Math.floor(num/10);
}
console.log(res);
var result=(res==number?"amstrong number":"not Armstrong");
console.log(result);