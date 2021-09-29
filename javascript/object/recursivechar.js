var pattern="BCABB";
var word_count={}

for(let char of pattern){
    if(char in word_count){
        console.log(char,"is the recursive first character");
        break;
    }
    else{
        word_count[char]=1;
    }
}