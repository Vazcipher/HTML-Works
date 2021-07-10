function addAccount() {
    let name=nme.value;
    let account_number=acc_no.value;
    let balance=bal.value;
    let mobile=mob.value;
    let password=pwd.value;

    let account={name,account_number,balance,mobile,password}
    console.log(account);
    if(account_number in localStorage){
        error.innerHTML="Account number already exist"
    }
    else{
        localStorage.setItem(account.account_number,JSON.stringify(account))
        alert("Account added success")
        location.href="./login.html"
    }
}

function login() {
    let user_name=uname.value;
    let password=pwd.value;
    let login_account={user_name,password}
    console.log(login_account);

    let user=JSON.parse(localStorage.getItem(user_name))
    console.log(user);
    if(user_name in localStorage){
        if(user.password== password){
            alert("Login Success")
            sessionStorage.setItem("user",user_name)
            location.href="./home.html"
        }
        else{
            error.innerHTML="*please enter a valid password"
        }
    }
    else{
        error.innerHTML="*invalid username"
    }
}

function balanceEnq() {
    let user=sessionStorage.getItem("user");
    console.log(user);
    let account=JSON.parse(localStorage.getItem(user))
    alert(`Your account balance is: ${account.balance}`)
}

var req=sessionStorage.getItem("user")
if(req){
    litem.innerHTML=`Logout ${req}`
}


function logout() {
    sessionStorage.removeItem("user")
    location.href="login.html"
}

function fundTransfer() {
    let to_account=toacc.value;
    let confirm_acc=cacc.value;
    let amount=amnt.value;

    let loged_user=JSON.parse(localStorage.getItem(req))
    console.log(loged_user);

    if(loged_user.balance<amount){
        alert("insufficant balance")
    }
    else{
        loged_user.balance=Number(loged_user.balance)-Number(amount)
        localStorage.setItem(loged_user.account_number,JSON.stringify(loged_user))
        if(to_account in localStorage){
            var user=JSON.parse(localStorage.getItem(to_account))
            user.balance=Number(user.balance)+Number(amount)
            localStorage.setItem(user.account_number,JSON.stringify(user))
            alert("Transaction complete")
        }
        else{
            alert("This to account not found")
        }
    }

}



// function fundTransfer() {
//     let to_account=toacc.value;
//     let confirm_acc=cacc.value;
//     let amount=amnt.value
//     let loged_user=JSON.parse(localStorage.getItem(req))

//     if(loged_user.balance<amount){
//         alert("Insufficiant balance")
//     }
//     else{
//         loged_user.balance=Number(loged_user.balance)-Number(amount);
//         localStorage.setItem(loged_user.account_number,JSON.stringify(loged_user))
//         if(to_account in localStorage){
//             let user=JSON.parse(localStorage.getItem(to_account))
//             user.balance=Number(user.balance)+Number(amount)
//             localStorage.setItem(user.account_number,JSON.stringify(user))
//             alert("Transaction completed")
//         }
//     }
// }