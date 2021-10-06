// country name and population
//country name along with currency symbol
var data=[
    {
    country1:{
        name:"Portugal",
        capital:"Lisbon",
        population:10305564,
        symbol:	"€"
       },

    country2:{
        name:"Austria",
        capital:"Vienna",
        population:8917205,
        symbol:	"€"
       },
    country3:[{
        name:"Kazakhstan",
        capital:"Nur-Sultan",
        population:18754440,
        symbol:	"₸"
    }]
}  
]
// var con=data.map(cap=>cap[0])
// console.log(con);
console.log(data[0].country3[0].capital)