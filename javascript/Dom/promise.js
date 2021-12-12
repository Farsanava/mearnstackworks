//resolve===>then
//reject===>catch
var mypro=new Promise((res,rej)=>{
    // let watch_time=2
    // if(watch_time>1){
    //     res("session was good")
    // }
    let watch_time=0
    if(watch_time<1){
        rej("session was too bad")
    }
})
// mypro.then(resolve=>console.log(resolve))
mypro.catch(reject=>console.log(reject))

// var mypro=new Promise((res,rej)=>{
//     let bank_app_completed=false
//     if(bank_app_completed){
//         res("now you are ready to attend angular session")
//     }
//     // else{
//     //     rej("oops stay in javascript session")
//     // }
// })
// mypro.then(resolve=>console.log(resolve))
// // mypro.catch(reject=>console.log(reject))
// 2782e46d6ed2e62a8cad9ba7f9c49d33