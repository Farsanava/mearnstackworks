//123 mod 36=15
//36 mod 15=6
//15 mod 6=3
// 6 mod 3=0
num1=21;
num2=14;
while(num1>num2){
    var gcd=num1%num2;
    num1=num2;
    num2=gcd;
    if(num1%num2==0){
        console.log(gcd);
    }
    
}