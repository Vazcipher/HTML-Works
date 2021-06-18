
var arr=[10,11,23,33,22,13,16];
even=[],odd=[]
for(let num of arr){
    if(num%2==0){
        even.push(num)
    }
    else{
        odd.push(num)
    }
}
console.log("Even array:"+even);
console.log("Odd array:"+odd);

// for(let even of arr){
//     if(even%2==0){
//         console.log(even);
//     }
// }

// var sum=0;

// for(let num of arr){
//     sum+=num
// }
// console.log(sum);