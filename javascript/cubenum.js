var num=123;
var mul=0;
while(num>0){
      let digit=num%10;
      mul=mul+(digit**3)
      num=Math.floor(num/10)
}
    console.log(mul);
