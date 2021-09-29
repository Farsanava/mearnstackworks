var arr=[10,11,10,20,21,21]
var dublicates={}
for(let num of arr){
    if(num in dublicates){
        dublicates[num]+=1;
    }
    else{
        dublicates[num]=1
    }
}
console.log(dublicates);