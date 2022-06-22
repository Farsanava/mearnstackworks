class Parant {
    m1() {
        console.log("inside parent");
    }
}
class Child extends Parent{
    m2() {
        console.log("inside m2");
    }
}
class Subchild extends Child {
    m3() {
console.log("inside m3");
    }
}

var sb=new Subchild()
sb.m1()
sb.m2()
sb.m3()

var ch=new Child()
ch.m1()
ch.m2()
// ch.m3()   error  bcz child does not take m3()

var pa=new Parant()
pa.m1()
// pa.m2()    error
// pa.m3()  error bcz not over ride (cannot ovridr (its a parent))