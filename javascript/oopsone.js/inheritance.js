class Parent{
    phone(){
        console.log("have redmi 10pro max");
    }
}
class Child extends Parent{
// ippo paranent inte phone extend chyth (over riding) (parent ile function use chyth illelel)

phone(){
    super.phone()
    console.log("iphone max");  //ippo phone()  use cythathond ivde over riding indavulla.....child nte phone() print chyyolloo
}
}

var child=new Child()
child.phone()   