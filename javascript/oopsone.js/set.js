// class Set {
//     add(objest) {

//     }
// }

var st = new Set()
st.add(10)
st.add(20)
st.add(20)
console.log(st);
function add(...args) {
    return args.reduce((num1, num2) => num1 + num2)
}
console.log(add(10, 20, 30, 40, 50));
//more number ofarguments
function getMax(...args) {
    return args.reduce((num1, num2) => num1 > num2 ? num1 : num2)
}
console.log(getMax(10, 80, 30, 40, 50));


var pattern = "hhaii hhowww"
var words = pattern.split(" ")
// console.log(words);
for (word of words) {
     st = new Set();
    for ( char of word) {
        st.add(char)
    }
    console.log(st);
}