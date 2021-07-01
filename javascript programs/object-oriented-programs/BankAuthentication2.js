class Bank{
    getAccount(){
        accounts={
                1001:{annount_no:1001,name:"vasif",balance:1000,username:"vasif",password:10001},
                1002:{annount_no:1001,name:"vasif",balance:1000,username:"vasif",password:10002},
                1003:{annount_no:1001,name:"vasif",balance:1000,username:"vasif",password:10003},
                1004:{annount_no:1001,name:"vasif",balance:1000,username:"vasif",password:10004},
        }
    }
    Authenticate(uname,pwd){
        let account_details=this.getAccount();
        if(uname in account_details.username){
            return 1
        }
        else{
            return 0;
        }
    }
}

var bankobj=new Bank();
var user=bankobj.Authenticate("vasif",10001);
var res=user==0?"Log in failed":"Success";
console.log(res);
