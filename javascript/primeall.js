// print all prime nmber bwn 4 to 25

var low = 4;
var upp = 25;

for (var i = low; i <= upp; i++) {
    var flag=0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag+=1;
            break;
        }
    }
    if (flag==0) {
        
    
     console.log(i);
    }
}



