var num=123;
var mul=0;
while(num>0){

    mul=mul+(num/100)**3+(num/10)**3+(num%10)**3;
}
    console.log(mul);
