// var num=15;
// var flag=0;
// for(let i=2;i<num;i++){
//     if(num%i==0){
//         flag+=1;
//     }
// }
// if(flag==0){
//     console.log("Prime number");
// }
// else{
//     console.log("Not a prime");
// }

var num=20;
let flag=0;

for(i=2;i<num;i++){
    if(num%i==0){
        flag+=1;
        break;
    }
}
if(flag==0){
    console.log("its prime");
}
else{
    console.log("not prime");
}

