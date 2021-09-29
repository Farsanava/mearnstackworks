arr1=[10,11,20,12,21]
arr2=[20,22,23,21,24]
var count=0;
for(let num1 of arr1){
    for(let num2 of arr2){
        if(num1==num2){
            console.log("common element:",num1);
    
        }
        count++
    }
}
console.log("count:",count);

//reducing iteration and time complexity

var arr1=[10,11,20,12,21]
var arr2=[20,22,23,21,24]
 arr1.sort((no1,no2)=>no1-no2)
 arr2.sort((no1,no2)=>no1-no2)

 var pos1=0,pos2=0;;;;;;
 var count=0;

 while((pos1<arr1.length)&(pos2<arr2.length)){
         if(arr1[pos1]==arr2[pos2]){
             console.log("common elemet",arr1[pos1]);
             pos1++;
             pos2++;
         }
         else if(arr1[pos1]<arr2[pos2]){
             pos1++;
         }
         else if(arr2[pos1]>arr2[pos2]){
             pos2++;
         }
         count++;
     }
 console.log("count:",count);


