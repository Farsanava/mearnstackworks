var arr=[10,11,12,11,10]   //complexity=n^2
for(let i=0;i<=4;i++){
    for( let j=i+1;j<=4;j++){
        if(arr[i]==arr[j]){
            console.log(`dublicate elemets ${arr[i]} `);
        }
    }
}