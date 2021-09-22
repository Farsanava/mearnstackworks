var arr = [10, 11, 12, 13, 14, 11]
var element = 15;
var flag=0;
for (let amount of arr) {
    if (element == amount) {
        flag+=1
        break;
    }
}
if(flag==0){
    console.log("element not found");
}
else{
    console.log("element found");
}



