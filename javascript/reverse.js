var num = 234;
var sum=1;
var rev = 0;
var re;
while (num>0) {//234
    sum*=num%10;
    rev=rev*10;
    re=rev+sum;
    num=num/10;
}
console.log(re);

