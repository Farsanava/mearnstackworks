function factorial(num1){
    let res=1;
    for(let i=1;i<=num1;i++){
        res=res*i;
    }
    return res;
}
console.log(factorial(5));