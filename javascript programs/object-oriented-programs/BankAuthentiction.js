class Bank{
    status=0;
    accounts={
        1000:{account_number:1000,name:"ajay",balance:1000,username:1000,password:"userone"},
        1001:{account_number:1001,name:"vjay",balance:2000,username:1001,password:"usertwo"},
        1002:{account_number:1002,name:"ram",balance:3000,username:1002,password:"userthree"},
        1003:{account_number:1003,name:"ravi",balance:4000,username:1003,password:"userfour"}
    }

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
        let account_details=this.accounts;
        if(username in account_details){
            if(pwd==account_details[username]["password"]){
                this.status=1;
                return username;
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
        console.log(`Your account ${this.account_number} has been credited with ${amt} your available balance is ${this.balance}`);
    }
    withdrawal(amt){
        if(this.balance<amt){
            console.log("Transaction failed insuficiant fund");
        }
        else{
            this.balance-=amt;
            console.log(`Your account ${this.account_number} has been debited with ${amt} your available balance is ${this.balance}`);

        }
    }
    balanceEnq(account_number){
        
            if(this.status==1){
                return this.accounts[account_number]["balance"]
            }
            return "invalid session"
    }

    fundTransfer(from_account,to_account,amount){
        if(this.status==1){
            let bal=this.balanceEnq(from_account);
            if(bal>=amount){
                if(to_account in this.accounts){
                    this.accounts[from_account]["balance"]-=amount;
                    this.accounts[to_account]["balance"]+=amount;
                }
                else{
                    console.log("invalid to account number");
                }
            }
            else{
                console.log("insufficiant balance");
            }
        }
        else{
            console.log("invalid session");
        }
    }  
    logout(user){
        this.status=0;
    }
}

var obj1=new Bank();
var user=obj1.authenticate(1000,"userone");
// var res=user==0?"Invalid user":user==1?"Login Success":"Invalid user";
// console.log(res);
// obj1.logout(user)
obj1.fundTransfer(user,10011,200)
console.log(obj1.balanceEnq(user));




