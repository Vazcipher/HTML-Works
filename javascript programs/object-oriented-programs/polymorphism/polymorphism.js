//many forms(more than one form)

//method over loading
//same method name diffrent parameter

class Calculation{
    add(){
        console.log("inside no arg method");
    }
    add(num1){
        console.log("inside single arg");
    }
    add(){
        console.log("inside two args method");
    }
}

var calc=new Calculation();
calc.add();
calc.add(8);

//method over riding
//

class Parent{
    phone(){
        console.log("Samsung");
    }
}

class Child extends Parent{
    phone(){
        super.phone();
        console.log("iphone");
    }
}

var child=new Child();
child.phone();
