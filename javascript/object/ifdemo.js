var product={
    p_code:1000,
    name:"produt1",
    price:250,
    avl_qty:50,
    batch_code:"est_2k21_08"// illenki else part work cheyyum

}
if("batch_code" in product){
    console.log("true");
}
else{
    product.batch_code="est_2k21_09"
}
console.log(product);

var student={
    roll:1000,
    student_name:"ram",
    course:"MEARN_STACK",

}
//------iteration------
for(let key in student){
    console.log(key); //for key
    console.log(student[key]); //for key value

}

//--------if-------

// if("batch" in student){
//     console.log("true");
// }
// else{
//     student.batch="mearnstack_aug"
// }
// console.log(student);



if(!("batch" in student)){
    student.batch="mearnstack_aug"
}
console.log(student);


if(true){  //  (false),(!true),(!false)
console.log("true block");
}
else{
    console.log("false block");
}