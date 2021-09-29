var text="hai hello hai hello"
var words=text.split(" ")
var word_count={}
for(let word of words){
    if(word in word_count){
        //chk for hai presented in word_count if yes add current value +1 else word_count[word]=1
        word_count[word]+=1
    }
    else{
        word_count[word]=1
    }
}
console.log(word_count);

//---simple way----

// text.split(" ").map(word=>word in word_count?word_count[word]+=1:word_count[word]=1)
// console.log(word_count);