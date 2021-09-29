var employees = [
    [1000, "ram", 15000, "hr", 1990, 2000],
    [1001, "ravi", 25000, "hr", 1989, 2005],
    [1002, "akhil", 36000, "developer", 2000, 2010],
    [1003, "nikil", 35000, "developer", 2010, 2015],
    [1004, "ajesh", 35000, "mrkt", 1991, 2010],
    [1005, "tom", 40000, "ba", 1990, 2015],
    [1006, "jack", 32000, "ba", 2001, 2010],
]

// //-----using "map method" print employee names

// var employee_names=employees.map((emp)=>emp[1])
// console.log(employee_names);

// //-------print number of employees

// console.log(employees.length);

// //-------print number of developers

// var developer_count = 0;
// for (let employe of employees) {
//     if (employe[3] == "developer") {
//         developer_count++;
//     }
// }
// console.log("developers number", developer_count);

// //------print exp of each employees

// for (let employe of employees) {
//     console.log("exp", employe[5] - employe[4]);
// }


// //-------print highest salary

// var highest = 0;
// for (let employe of employees) {
//     if (highest < employe[2]) {
//         var highest = employe[2];
//     }
// }
// console.log(highest);


// //--------print lowest salary
// var lowest = employees[0][2];
// for (let employe of employees) {
//     if (lowest > employe[2]) {
//         lowest = employe[2];
//     }
// }
// console.log("lowest salary", lowest);



// //-----------print name of developers who is taking highest salary(doubt)
// var high = 0;
// for (let employe of employees) {
//     if (employe[3] == "developer") {
//         if (high > employe[2]) {
//             console.log(employe[1]);

//         }
//     }
// }



// //----------print name of highest exp employee(doubt)
// for (let employe of employees) {
//     var exp = employe[5] - employe[4];
// }

// //print developer details

// var developers=employees.filter(employe=>employe[3]=="developer")
// console.log(developers);

// //print names of ba

// var analyst=employees.filter(emp=>emp[3]=="ba")
// console.log(analyst);
// //  using map for perticular value

// var analyst=employees.filter(emp=>emp[3]=="ba").map(emp=>emp[1])
// console.log(analyst);


// //print developer names
// var developer_name=employees.filter(emp=>emp[3]=="developer").map(emp=>emp[1])
// console.log(developer_name);

// //print developer names whose exp>6 years  (method jaining bcause filter and map are used)

// var dev_names=employees.filter(emp=>(emp[3]=="developer") & (emp[5]-emp[4]>6)).map(emp=>emp[1])
// console.log(dev_names);

// //print bonus of 5000 rs for all developers

// var dev_bonus=employees.filter(emp=>emp[3]=="developer").map(emp=>emp[2]+5000)
// console.log(dev_bonus);

// // sort employees wrt exp asc,desc

// employees.sort((emp1,emp2)=>(emp1[5]-emp1[4])-(emp2[5]-emp2[4]))
// console.log("ascending",employees);

// employees.sort((emp1,emp2)=>(emp2[5]-emp2[4])-(emp1[5]-emp1[4]))
// console.log("descending:",employees);

// //sort wrt salary

// employees.sort((emp1,emp2)=>emp1[2]-emp2[2])
// console.log("sort salary:",employees);

// //sort  developers wrt to salry

// var res=employees.filter((emp)=>emp[3]=="developer").sort((emp1,emp2)=>(emp1[2] -emp2[2]))
// console.log(res);






