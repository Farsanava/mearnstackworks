function primeNums(low,upp){
    for (var i = low; i <= upp; i++) {
        var flag=0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag++;
                break;
            }
        }
        if (flag==0) {
            
          console.log(i);
         
        }
    }
}
console.log(primeNums(4,29));