class Student{
    setStudent(roll,course,stu_name){
this.roll=roll,
this.course=course,
this.stu_name=stu_name
    }
    printStudent(){
          console.log(this.roll,this.course,this.stu_name);
    }
}
var obj1=new Student();
obj1.setStudent(10,"mearn","sanu")
obj1.printStudent();