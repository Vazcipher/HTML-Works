var num=15;

// if(num%15==0){
//     console.log("fizbuz");
// }
// else if(num%3==0){
//     console.log("fiz");
// }
// else if(num%5==0 ){
//     console.log("buz");
// }                        

var result="";
if(num%3==0){
    result+="fiz"
}
if(num%5==0){
    result+="buzz"
}
console.log(result);