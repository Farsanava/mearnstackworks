var weather_data=[
    {district:"tvm",temp:30},
    {district:"tvm",temp:29},
    {district:"apy",temp:24},
    {district:"ktm",temp:20},
    {district:"idk",temp:19},
    {district:"ekm",temp:31},
    {district:"tsr",temp:29},
    {district:"mpm",temp:30},
   
    {district:"apy",temp:25},
    {district:"ktm",temp:21},
    {district:"idk",temp:18},
    {district:"ekm",temp:30},
    {district:"tsr",temp:20},
    {district:"mpm",temp:31},

]
//{tvm:30,apy=24,------}
var forcast={}
for(let data of weather_data){
    let distr_name=data.district
    let curr_temp=data.temp
    if(distr_name in forcast){
      let old_temp=forcast[distr_name]
      if(curr_temp>old_temp){
          forcast[distr_name]=curr_temp
      }
    }
    else{
        forcast[distr_name]=curr_temp
    }
}
console.log(forcast);
//convert object to array
console.log(Object.entries(forcast));
//sort
var weath=Object.entries(forcast).sort(((amount1,amount2)=> amount1[1] - amount2[1]))
console.log(weath);
