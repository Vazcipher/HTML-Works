class Bank{
    getAccountDetails(){
        let accounts={
            1000:{account_number:1000,name:"ajay",balance:1000,username:1000,password:"userone"},
            1001:{account_number:1001,name:"vjay",balance:2000,username:1001,password:"usertwo"},
            1002:{account_number:1002,name:"ram",balance:3000,username:1002,password:"userthree"},
            1003:{account_number:1003,name:"ravi",balance:4000,username:1003,password:"userfour"}
        }
        return accounts
    }

    authenticate(username,pwd){
        let account_details=this.getAccountDetails();
        if(username in account_details){
            if(pwd==account_details[username]["password"]){
                return 1;
            }
            else{
                return -1
            }
        }
        else{
            return 0
        }
    }

    deposit(amt){
        this.balance+=amt;
        console.log(`Your account ${this.account_number} has been creadited with ${amt} your available balance is ${this.balance}`);
    }
    withdrawal(amt){
        if(this.balance<amt){
            console.log("Transaction failed inssuficiant fund");
        }
        else{
            this.balance-=amt;
            console.log(`Your account ${this.account_number} has been debited with ${amt} your available balance is ${this.balance}`);

        }
    }
    balanceEnq(){
        console.log(`Your Available balance ${this.balance}`);
        
    }
}

var obj1=new Bank();
var user=obj1.authenticate(5000,"vasif");
var res=user==0?"Invalid user":user==1?"Invalid password":"Login Success";
console.log(res);