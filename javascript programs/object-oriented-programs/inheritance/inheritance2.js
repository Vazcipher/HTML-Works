class person{
    setPerson(name,age){
        this.name=name;
        this.age=age;
    }
    printPerson(){
        console.log(this.name,this.age);
    }
}

class Student extends Person{
    setPerson(name,age){
        this.name=name;
        this.age=age;
    }
}