class Person{
    ///          parameter
    setPerson(na,gender,age){   //constructor 
        this.name=na,
        this.gender=gender,
        this.age=age
        //this.name,this.age,this.gender (instance variable)
        //name,age,gender (local)
  }   // duty of setPerson()==>initializing instance variable
    printPerson(){
        console.log(this.name,this.age,this.gender);
    }//duty of printPerson==> priting instance variable
}

//var refname=new classname()
var obj1= new Person();
//               arguments
obj1.setPerson("sanu","female",22)
console.log(obj1.name);  //single aayi print akknam nghil
// obj1.printPerson();


var obj2=new Person();
obj2.setPerson("shabi","male",29)
obj2.printPerson();


