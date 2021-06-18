var arr=[4,5,6]; 
// [11,10,9]

op=[];
var total=0;
for(let num of arr){
    total=total+num;
    
}
console.log(total);

for(let num of arr){
    let odr=total-num;
    op.push(odr)
}
console.log(op);