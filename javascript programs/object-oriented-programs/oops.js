//class? plan, blue print, template

//Object - real world entity, constrected object with the plan (class)

//reference = objectinte melil operation perfom cheyyan

class Employee{
    setEmployee(eid,e_name,desig,slary){
        this.eid=eid;
        this.e_name=e_name;
        this.desig=desig;
        this.slalary=slary;
    }
    printDetails(){
        console.log(this.eid,this.e_name,this.desig,this.slalary);
    }
}

var employee=new Employee()
employee.setEmployee(1000,"vasif","Developer",26700)
employee.printDetails()



