//------------array of objects---------------

var point_table=[
     {t_name:"csk",pld:10,wom:8,loss:2,pts:16},
     {t_name:"dc",pld:11,wom:8,loss:3,pts:16},
     {t_name:"rcb",pld:11,wom:7,loss:4,pts:14},
     {t_name:"kkr",pld:11,wom:5,loss:6,pts:10},
     {t_name:"mi",pld:11,wom:5,loss:6,pts:10},
     {t_name:"pkb",pld:11,wom:4,loss:7,pts:8},
     {t_name:"rr",pld:11,wom:4,loss:7,pts:8},
     {t_name:"srh",pld:10,wom:2,loss:8,pts:4}
]  
// //external iteration
// for(let team of point_table){       // all objects
//     console.log(team);
// }
//          // print only t_name


// //print number of team playing ipl_2k21
// console.log("number of team:",point_table.length);

// //print team names only (internal iteration)
// point_table.map(team=>team.t_name).forEach(name=>console.log(name))
//point_table.forEach(name=>console.log(name.t_name))

////        or

// //external iteration
// for(let team of point_table){       // all objects
//     console.log(team.t_name);
// }

// // print team details whose pts>10
// point_table.filter(team=>team.pts>10).forEach(name=>console.log(name))

// // is kkr playing ipl 2k21
// var is_playing=point_table.some(team=>team.t_name=="kkr")  ////find kodthal aa perticular array return cheyyum
// console.log(is_playing);

// //or
// //external
// var flag=0;
// for(let team of point_table){
//     if(team.t_name=="kkr"){
//         flag++;
//         break;
//     }
//     else{
//         flag=0;
//     }
// }
// console.log(flag>0?"yes":"no");

// //sort tem wrt loss desc
// console.log(point_table.sort((team1,team2)=>team2.loss - team1.loss))

// //print team details who have max point
// var max_name=point_table.reduce((team1,team2)=>team1.pts>team2.pts?team1:team2)  //reduceRright kodthal csk verum
// console.log(max_name);

// //return max same value arrays
// var max_name=point_table.map(team=>team.pts).reduce((team1,team2)=>team1>team2?team1:team2) 
// point_table.filter(team=>team.pts==max_name).forEach(team=>console.log(team))


// // count of won

// var w_count={}
// for(let team of point_table){
//     if(team.wom in w_count){
//         w_count[team.wom].push(team.t_name)
//     }
//     else{
//         w_count[team.wom]=[team.t_name]
//     }
// }
// console.log(w_count);

//count of loss
var w_count={}
for(let team of point_table){
    if(team.pts in w_count){
        w_count[team.pts].push(team.t_name)
    }
    else{
        w_count[team.pts]=[team.t_name]
    }
}
console.log(w_count);
