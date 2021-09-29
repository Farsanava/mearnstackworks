var student={
    roll:100,
    name:"nikil",
    course:"bca",
    total:750
}

// print student name
console.log(student.name);
console.log(student.course);

//update total as 800
student.total=800
console.log(student);

//chk for grade key is present or not
console.log("grade" in student);

//add new key value pair(grade:a+)
student["garade"]="A+"
console.log(student);

//add 20 mark of bonus
student.total+=20;
console.log(student);