//num=123
//i

var num=234;
var res = 0; //res=" ";
while (num!=0) {//234
   let digit=num%10;   //let is a local variable
   // let oru thavana loopinte ullil use akkanond let use chyth
     res=(res*10)+digit; // res+=digit;
    num=Math.floor(num/10);
}
console.log(res);

