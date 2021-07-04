class Bank{
    status=0;
    accounts={
        1001:{annount_no:1001,name:"vasif",balance:15000,username:"vasif",password:10001},
        1002:{annount_no:1001,name:"vasif",balance:10045,username:"vasif",password:10002},
        1003:{annount_no:1001,name:"vasif",balance:100457,username:"vasif",password:10003},
        1004:{annount_no:1001,name:"vasif",balance:1000,username:"vasif",password:10004},
}
    getAccount(){
        accounts={
                1001:{annount_no:1001,name:"vasif",balance:1000,username:"vasif",password:10001},
                1002:{annount_no:1001,name:"vasif",balance:1000,username:"vasif",password:10002},
                1003:{annount_no:1001,name:"vasif",balance:1000,username:"vasif",password:10003},
                1004:{annount_no:1001,name:"vasif",balance:1000,username:"vasif",password:10004},
        }
    }
    Authenticate(uname,pwd){
        let accounts=this.accounts;
        if(uname in accounts){
            if(pwd==accounts[uname]["password"]){
                this.status=1;
                return uname
            }
            else{
                console.log("Invalid password");
            }
        }
        else{
            console.log("User not found");
        }
    }
    deposit(acc_no,amount){
        let deposit=this.accounts;
        if(this.status==1){
            deposit[acc_no]["balance"]+=amount;
            return amount;
        }
        else{
            "Session time out"
        }
        
    }
    balanceEnq(uname){
        
        if(this.status==1){
            return this.accounts[uname]["balance"]
        }
        else{
            "session time out"
        }
    }
    fundTransfer(from_acc,to_acc,amount){
        
        if(this.status==1){
            let bal=this.balanceEnq(from_acc);
            if(bal>=amount){
                if(to_acc in this.accounts){
                    this.accounts[from_acc]["balance"]-=amount;
                    this.accounts[to_acc]["balance"]+=amount;
                    return amount
                }
                else{
                    console.log("Invalid user");
                }
            }
            else{
                console.log("insifficiant fund to transfer");
            }
        }
        else{
            console.log("Session time out");
        }
    }
}

var obj1=new Bank()
user=obj1.Authenticate(1001,10001)
console.log(user);
console.log(`your account credited with Amount ${obj1.deposit(1001,300)}`);

console.log(`${obj1.fundTransfer(1001,1002,6000)} successfully transfered`);
console.log(`Your current balance is: ${obj1.balanceEnq(user)}`);
