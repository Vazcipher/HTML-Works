//create Account()
//deposit()
//withdrawal()
//balanceEnqiry()

class Bank{
    createAccount(account_number,name,balance){
        this.account_number=account_number;
        this.name=name;
        this.balance=balance;
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

var obj1=new Bank()
obj1.createAccount(1000,"Vasif",2000);
obj1.deposit(1000);  
obj1.withdrawal(1000);
obj1.balanceEnq();