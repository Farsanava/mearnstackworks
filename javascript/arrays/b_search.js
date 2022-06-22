//        0  1  2  3  4  5
var arr=[10,11,13,14,12,15]
//        1  2  3  4  5  6     -->length
arr.sort((num1,num2)=>num1-num2)
var element=15;
var low=0,upp=arr.length-1;

var flag=0;
while(low<=upp){
     mid=Math.floor((low+upp)/2);// 0+5/2==>5/2==>2.5   ==>2
    if(element<arr[mid]){
        upp=mid-1;
    }
    else if(element>arr[mid]){
        low=mid+1;
    }
    else if(element==arr[mid]){
        flag=1;
        break;

    }
}
console.log(flag==0?"element not found":"element found");



