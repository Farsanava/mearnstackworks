var num1=10,num2=20,num3=30;
//find largest number
if ((num1>num2) & (num1>num3)){
    console.log(num1,"is large");
    
} else if((num2>num1) & (num2>num3)){
    console.log(`${num2} is large`);
    
}
else if((num3>num1) & (num3>num1)){
    console.log(`${num3} is large`);
    
}
else{
    console.log("equal");
}