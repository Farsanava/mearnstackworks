console.log("hai");
setTimeout(()=>{
    console.log("time out");
},4000)
console.log("hello");

// -----or---

console.log("hai");
setTimeout(()=>{
    console.log("time out");
},0)
console.log("hello");

// ----above 2 code output are same
// hai hello time out