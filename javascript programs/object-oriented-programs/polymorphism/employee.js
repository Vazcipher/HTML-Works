class Employee{
    constructor(id,name,desig,salary,exp){
        this.id=id;
        this.name=name;
        this.desig=desig;
        this.salary=salary;
        this.exp=exp;
    }
    getEmployee(){
        employee={
            101:{id:101,name:"vasif",desig:"developer",salary:15000,exp:1},
            102:{id:102,name:"sabith",desig:"developer",salary:25000,exp:1}
        }
    }

}

var emp1=new Employee();
var emp2=new Employee();
var emp3=new Employee();
var emp4=new Employee();
var emp5=new Employee();


//create 5 emlpoyee obj

//print highest salary employee
//sort employee acrosing salary
//check is there any employee working as QA