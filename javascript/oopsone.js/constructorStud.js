class Student {
    constructor(roll, course, stu_name) {
        this.roll = roll,
            this.course = course,
            this.stu_name = stu_name
    }
    printStudent() {
        console.log(this.roll, this.course, this.stu_name);
    }
}
var obj = new Student(10, "mearn", "sanu");
obj.printStudent();