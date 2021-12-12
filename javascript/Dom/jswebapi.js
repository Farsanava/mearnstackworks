console.log("line1");
setTimeout(()=>{
    console.log("first time out");
},3000)
setTimeout(()=>{
    console.log("2nd time out");
},0)
console.log("line4");