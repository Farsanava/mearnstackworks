var accounts=[
    [1000,"ram","savings",50000,true],
    [1001,"ravi","current",40000,true],
    [1002,"nikil","savings",5000,false],
    [1003,"jain","current",34000,false],
    [1004,"ajesh","savings",55000,true]
]

//sort array wrt balance
accounts.sort((acc1,acc2)=>acc1[3]-acc2[3])
console.log("sort salary=",accounts);

//print details of acno=1004
var accno4_detail=accounts.filter(acc=>acc[0]=="1004")
console.log(accno4_detail);

//is there any person with balance <2000
var is_avail=accounts.some(acc=>acc[3]<2000)
console.log(is_avail);

//print name of users with in active_account
var in_active=accounts.filter(acc=>acc[4]==true).map(acc=>acc[1])
console.log(in_active);

//print details of user with max balance
var max_bal=accounts.reduce((bal1,bal2)=>bal1[3]>bal2[3]?bal1:bal2)
console.log(max_bal);

//print details of users with acc-type as savings and blanace >25000
var acc_detail=accounts.filter(acc=>acc[2]=="savings" & acc[3]>25000)
console.log(acc_detail);



