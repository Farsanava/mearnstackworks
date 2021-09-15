var num1=5;
if ((num1%15)==0) {
    console.log(`fizzbuzz`)
    
} 
else if((num1%5)==0){
    console.log("buzz")
    
}
else if((num1%3)==0) {
    console.log(`fizz`)

}
//num1=15 kodthal mokalil %3 kodthal work aavulla first the maathre work avollo
//mokalil %15 kodthal work aavum


var num=15;
var res=""; //res=""
if (num%3==0) {
    res+="fizz" //res="" + fizz
    
}
else if (num%5==0) {
    res+="buzz" //res=fizz+buzz
}
console.log(res);  //fizzbuzz