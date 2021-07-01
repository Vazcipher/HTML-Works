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

var emp1=new Employee(1000,"vasif","developer",15000,2);
var emp2=new Employee(1001,"jaanu","developer",25000,2);
var emp3=new Employee(1003,"ravi","QA",25000,3);
var emp4=new Employee(1004,"akshay","market",25000,2);
var emp5=new Employee(1001,"sabith","tester",25000,4);
var employees=[];
employees.push(emp1,emp2,emp3,emp4,emp5);

var icon_emp=employees.reduce((obj1,obj2)=>obj1.salary>obj2.salary?obj1:obj2)
console.log(icon_emp);


//create 5 emlpoyee obj

//print highest salary employee
//sort employee acrosing salary
//check is there any employee working as QA